'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  image_product.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url_imagen: {
      type: DataTypes.STRING(300),
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
    paranoid: true,
    modelName: 'image_product',
  });
  return image_product;
};