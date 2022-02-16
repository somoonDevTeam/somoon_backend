const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    point: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    remodeling_apply_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'remodeling_apply',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'review',
    timestamps: true,
    underscored: true, // snake case 명명규칙을 따름
    freezeTableName: true, // 복수형으로 바뀌지 않도록
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "remodeling_apply_id",
        using: "BTREE",
        fields: [
          { name: "remodeling_apply_id" },
        ]
      },
    ]
  });
};
