const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ISSUED_COUPON', {
    Company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Issued_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Expiration_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ISSUED_COUPON',
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
