'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category_product.init({
    nombre: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'La descripcion de la categoria es un valor requerido'
        },
        isAlpha: {
          msg: 'La categoria, solo se permite valores del alfabeto'
        },
        max: {
          arg: 150,
          msg: 'El campo categoria solo permite 150 caracteres'
        }
      }
    },
    url_image : {
      type: DataTypes.STRING
    },
    created_by:{
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: {
          msg: 'created_by es un valor requerido'
        }
      }
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
    modelName: 'category_product',
  });
  return Category_product;
};