const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('THEME_ASSIGNED', {
    Theme_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Display: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'THEME_ASSIGNED',
    timestamps: false
  });
};
