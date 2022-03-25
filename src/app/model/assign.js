const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assign', {
    remodeling_apply_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'remodeling_apply',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    memo: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    accept_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stop_state: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contract_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    contract_img_path: {
      type: DataTypes.STRING(700),
      allowNull: true
    },
    contract_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'assign',
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
      {
        name: "company_id",
        using: "BTREE",
        fields: [
          { name: "company_id" },
        ]
      },
    ]
  });
};
