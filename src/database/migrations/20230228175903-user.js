'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
        type: Sequelize.STRING(18)
      },
      rfc: {
        type: Sequelize.STRING(13)
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
      celular: {
        type: Sequelize.STRING(10)
      },
      imagen_url: {
        type: Sequelize.STRING(250)
      },
      rol_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: {
            tableName: 'roles'
          },
          key: 'id'
        }
      },
      created_by: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_by: {
        type: Sequelize.INTEGER
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deleted_by: {
        type: Sequelize.INTEGER
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
