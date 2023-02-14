'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      apellido_paterno: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      apellido_materno: {
        type: Sequelize.STRING(200)
      },
      curp: {
        allowNull: false,
        type: Sequelize.STRING(18)
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(350)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      calle: {
        allowNull: false,
        type: Sequelize.STRING(300)
      },
      num_ext: {
        allowNull: false,
        type: Sequelize.INTEGER(5)
      },
      num_int: {
        type: Sequelize.STRING(20)
      },
      codigo_postal: {
        allowNull: false,
        type: Sequelize.INTEGER(5)
      },
      celular: {
        type: Sequelize.INTEGER(12)
      },
      estado: {
        type: Sequelize.STRING(250)
      },
      ciudad: {
        type: Sequelize.STRING(400)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};