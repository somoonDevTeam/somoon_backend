const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BUILDING', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Eatable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Exercise: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Xaxis: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Yaxis: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    StayTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalArea: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BUILDING',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
