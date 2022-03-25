const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ROOT_AREA', {
    Area_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Area_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ROOT_AREA',
    timestamps: false
  });
};
