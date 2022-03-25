const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMPANY_CERTIFICATE', {
    Company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Certificate_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Certified_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Certificate_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Apply_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'COMPANY_CERTIFICATE',
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
