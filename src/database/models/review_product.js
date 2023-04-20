'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  review_product.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ranking: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    review: {
      type: DataTypes.STRING(400),
      allowNull: false
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
    modelName: 'review_product',
  });
  return review_product;
};