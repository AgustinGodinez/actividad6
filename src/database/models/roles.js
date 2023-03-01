'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roles.init({
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true
    },
    created_by:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by:{
      type: DataTypes.INTEGER
    },
    deleted_by:{
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Roles',
  });
  return Roles;
};