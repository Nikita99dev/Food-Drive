'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MinusMoney extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MinusMoney.belongsTo(models.User, {foreignKey: "userId"})
    }
  };
  MinusMoney.init({
    amount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MinusMoney',
  });
  return MinusMoney;
};
