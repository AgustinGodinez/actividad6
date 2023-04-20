'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    delivered: DataTypes.BOOLEAN,
    paid: DataTypes.BOOLEAN,
    customer_address_send: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    customaer_address_invoicing: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_method_id: {
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
    modelName: 'order',
  });
  return order;
};