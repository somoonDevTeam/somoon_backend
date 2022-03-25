const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('REMODELING_APPLY_DIV2', {
    Apply_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Div2_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'REMODELING_APPLY_DIV2',
    timestamps: false
  });
};
