'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Marker, {foreignKey: "userId"})
    }
  };
  User.init({
    name:{
     type: DataTypes.STRING,
     allowNull: false

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true
 
     },
    password: {
      type: DataTypes.STRING,
      allowNull: false
 
     },
    role: {
       type: DataTypes.STRING,
       allowNull: false,
       defaultValue: 'user',
     }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
