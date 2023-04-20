'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      calle: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      numero_ext: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      colonia: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      cp: {
        allowNull: false,
        type: Sequelize.STRING(5)
      },
      estado: {
        allowNull: false,
        type: Sequelize.STRING(120)
      },
      municipio: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      numero_int: {
        type: Sequelize.STRING(30)
      },
      image_url: {
        type: Sequelize.STRING(250)
      },
      telefono: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(120)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      rfc: {
        type: Sequelize.STRING(13)
      },
      ciudad: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      disponible: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      envio_domicilio: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      rol_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 2
      },
      category_seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('sellers');
  }
};
