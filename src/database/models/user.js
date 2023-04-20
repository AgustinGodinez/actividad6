'use strict';
import bcrypt from 'bcrypt'

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
      User.belongsTo(models.Roles,
        {
          as: 'Rol',
          foreignKey: 'rol_id'
        })
    }
  }

  User.init({
    nombre: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'El nombre es un valor requerido'
        },
        isAlpha: {
          msg: 'El nombre, solo se permite caracteres del alfabeto'
        },
        max: {
          arg: 150,
          msg: 'El campo nombre solo permite 150 caracteres'
        }

      }
    },
    apellido_paterno: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'El Apellido Paterno es un valor requerido'
        },
        isAlpha: {
          msg: 'El apellido paterno, solo permite caracteres del alfabeto'
        },
        max: {
          arg: 200,
          msg: 'El apellido paterno solo permite maximo 200 caracteres'
        }
      }
    },
    apellido_materno: {
      type: DataTypes.STRING,
      validate:{
        isAlpha: {
          msg: 'El apellido materno solo se permite caracteres del alfabeto'
        },
        max: {
          arg: 200,
          msg: 'El apellido materno Solo se permite 200 caracteres'
        }
      }
    },
    curp: {
      type: DataTypes.STRING,
      validate:{
        isAlphanumeric: {
          msg: 'El CURP solo se permite caracteres alfanumericos'
        },
        len: {
          args: [18],
          msg: 'El CURP debe contener 18 caracteres alfanumericos'
        },
        validateCurp: function(value){
          if ( !/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/i.test(value)) {
            throw new Error('La estructura de la CURP es invalida')
          }
        }
      }
    },
    rfc: {
      type: DataTypes.STRING,
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
    fecha_nacimiento:{
      type: DataTypes.STRING,
      validate: {
        isDate: {
          msg: "Fecha de nacimiento invalida"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Email invalido"
        },
        notEmpty: {
          msg: 'Email es un valor requerido'
        },
        max: {
          arg: 350,
          msg: 'Email solo se permite 350 caracteres'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password es un valor requerido'
        },
        max: {
          arg: 64,
          msg: 'Password solo se permite 64 caracteres'
        }
      }
    },
    celular: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Celular es un valor requerido'
        },
        isNumeric:{
          msg: 'Celular solo se aceptan valores numericos'
        },
        len: {
          arg: [10],
          msg: 'Celular permite maximo 10 caracteres'
        }
      }
    },
    imagen_url: {
      type: DataTypes.STRING,
      validate:{
        max: {
          arg: 250,
          msg: 'El url de imagen solo permite 250 caracteres'
        }

      }
    },
    rol_id : {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    created_by:{
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'El nombre es un valor requerido'
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
    hooks:{
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt);
        }
       },
      beforeUpdate:async (user) => {
        if (user.password) {
          const salt = bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    },
    sequelize,
    paranoid: true,
    modelName: 'users',
  });

  return  User;
};