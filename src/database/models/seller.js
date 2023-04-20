'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seller.init({
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    calle: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    numero_ext: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    colonia: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    cp: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    municipio: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    numero_int: DataTypes.STRING(30),
    image_url: DataTypes.STRING(250),
    telefono: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      validate: {
        notEmpty: {
          msg: 'Password es un valor requerido'
        },
        is: {
          arg: ["/^[0-9a-f]{64}$/i"],
          msg: 'El Password no cumple las caracteristicas de seguridad'
        },
        max: {
          arg: 64,
          msg: 'Password solo se permite 64 caracteres'
        }
      }
    },
    rfc: {
      type: DataTypes.STRING(13),
      validate:{
        isAlphanumeric: {
          msg: 'El RFC solo se permite caracteres alfanumericos'
        },
        len: {
          args: [12,13],
          msg: 'El RFC debe contener 12 caracteres personas fisicas y 13 caracteres para personas morales'
        }
      }
    },
    ciudad: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    envio_domicilio: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    rol_id: {
      type: DataTypes.INTEGER,
      defaultValue: 2
    },
    category_seller_id: {
      type: DataTypes.INTEGER,
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
    modelName: 'Seller',
  });
  return Seller;
};