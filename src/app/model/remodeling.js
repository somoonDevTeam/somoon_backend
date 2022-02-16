const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remodeling', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    apartment_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    building: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    xpos: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ypos: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    etc: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    price_area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    period: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    part: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    root_area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    second_area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    popular: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    display: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'remodeling',
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
    ]
  });
};
