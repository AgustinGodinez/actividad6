'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  customer_address.init({
    cp: {
      type:DataTypes.STRING,
      validate: {
        len: {
          args: [5],
          msg: 'El CP solo acepta 5 digitos'
        },
        notEmpty: {
          msg: 'El CP es un valor requerido'
        }
      }
    },
    estado: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [120],
          msg: "El campo Estado solo acepta 120 caracteres"
        },
        notEmpty: {
          msg: "El campo Estado es un valor requerido"
        }
      }
    },
    ciudad: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [200],
          msg: "El campo Ciudad solo acepta 200 caracteres"
        },
        notEmpty: {
          msg: "El campo Ciudad es un valor requerido"
        }
      }
    },
    municipio: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [200],
          msg: "El campo municipio solo acepta 200 caracteres"
        },
        notEmpty: {
          msg: "El campo municipio es un valor requerido"
        }
      }
    },
    colonia: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [120],
          msg: "El campo colonia solo acepta 120 caracteres"
        },
        notEmpty: {
          msg: "El campo colonia es un valor requerido"
        }
      }
    },
    calle: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [150],
          msg: "El campo Calle solo acepta 150 caracteres"
        },
        notEmpty: {
          msg: "El campo Calle es un valor requerido"
        }
      }
    },
    numero_ext: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [30],
          msg: "El numero exterior solo acepta 30 caracteres"
        },
        notEmpty: {
          msg: "El numero exterior es un valor requerido"
        }
      }
    },
    numero_int: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [30],
          msg: "El numero interior solo acepta 30 caracteres"
        },
        notEmpty: {
          msg: "El numero interior es un valor requerido"
        }
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updated_by: DataTypes.INTEGER,
    deleted: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'customer_address',
  });
  return customer_address;
};