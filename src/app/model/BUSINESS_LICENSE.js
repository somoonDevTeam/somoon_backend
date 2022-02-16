const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BUSINESS_LICENSE', {
    Company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Apply_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    License_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Reason: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BUSINESS_LICENSE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Apply_id" },
        ]
      },
    ]
  });
};
