'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    descripcion: {
      type:DataTypes.STRING(250),
      allowNull: false
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    product_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: DataTypes.INTEGER,
    deleted_by: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid:true,
    modelName: 'product',
  });
  return product;
};