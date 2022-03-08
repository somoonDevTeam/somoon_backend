'use strict'

import userRepository from '../repository/user.repository';
import bcrypt from 'bcrypt'
import {
  uuid
} from '../util/uuid'
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define('users', {
    uuid: {
      allowNull: true,
      unique: true,
      type: 'BINARY(16)',
      defaultValue: () => Buffer(uuid(), 'hex'),
      get: function () {
        return Buffer.from(this.getDataValue('uuid')).toString('hex')
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sns_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sns_type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    profile_img: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    underscored: true, // snake case 명명규칙을 따름
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx1_username",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx2_email",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "idx3_sns_id",
        using: "BTREE",
        fields: [
          { name: "sns_id" },
        ]
      },
    ]
  });

  //association 추가..하고 index에서는 없애고 테스트

  // hooks
  users.beforeSave(async (user, options) => {
    if (user.changed('password')) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  });

  //print
  users.prototype.toWeb = function () {
    // findAll 을 하면 여러 컬럼이 따라옴 (uniqno, _previousValues 등..)
    // 이런 쓸데없는 컬럼들을 제외하고 핵심 값인 dataValues만 가져온 뒤 할당 하는 것
    const values = Object.assign({}, this.dataValues)

    // 그 중에서도 주요 정보인 id와 password는 삭제해준다.
    delete values.id
    delete values.password


    return values
  }

  return users
};
