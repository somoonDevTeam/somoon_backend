const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPECIALIZED', {
    Company_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ability_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPECIALIZED',
    timestamps: false
  });
};
