const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
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
    BIRTHDAY: {
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
    profile_image: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
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
};
