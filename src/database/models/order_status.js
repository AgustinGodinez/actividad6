'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_status.init({
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updated_by: DataTypes.INTEGER,
    deleted_by: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid:true,
    modelName: 'order_status',
  });
  return order_status;
};