const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KEYWORD_ASSIGNED', {
    Keyword_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KEYWORD_ASSIGNED',
    timestamps: false
  });
};
