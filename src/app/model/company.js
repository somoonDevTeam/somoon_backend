const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    location: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    active_location: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    introduction: {
      type: DataTypes.STRING(10000),
      allowNull: true
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    as_provide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    as_warranty: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    as_fee: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    profile_img: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: "https:\/\/somoonhouse.com\/sources\/anonymous.jpg"
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    area_fee: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    limit_fee: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    represent_img1: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: "https:\/\/somoonhouse.com\/sources\/anonymous.jpg"
    },
    represent_img2: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: "https:\/\/somoonhouse.com\/sources\/anonymous.jpg"
    },
    owner_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company',
    timestamps: true,
    underscored: true, // snake case 명명규칙을 따름
    freezeTableName: true, // 복수형으로 바뀌지 않도록
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
