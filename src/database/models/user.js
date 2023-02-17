'use strict';
import bcrypt from 'bcrypt';

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
      // define association here
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
        notEmpty: {
          msg: 'El CURP es un valor requerido'
        },
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
    calle: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Calle es un valor requerido'
        },
        max: {
          arg: 300,
          msg: 'Calle solo se permite 300 caracteres'
        }
      }
    },
    num_ext: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Numero Exterior es un valor requerido'
        },
        len: {
          arg: 5,
          msg: 'Num Exterior solo se permite 5 caracteres'
        }
      }
    },
    num_int:{
      type: DataTypes.STRING,
      validate: {
        max: {
          arg: 20,
          msg: 'Num Interior solo se permite 20 caracteres'
        }
      }
    },
    codigo_postal: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Codigo Postal es un valor requerido'
        },
        isNumeric:{
          msg: 'Codigo Postal solo se acepta valores numericos'
        },
        len: {
          arg: [5],
          msg: 'Codigo postal Solo se permite 5 caracteres numericos'
        }
      }
    },
    celular: {
      type: DataTypes.INTEGER,
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
    estado: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Estado es un valor requerido'
        },
        max: {
          arg: 250,
          msg: 'Solo se permiten maximo 250 caracteres'
        }
      }
    },
    ciudad: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Ciudad es un valor requerido'
        },
        max: {
          arg: 300,
          msg: 'Solo se permiten maximo 400 caracteres'
        }
      }
    },
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
    modelName: 'User',
  });

  return  User;
};