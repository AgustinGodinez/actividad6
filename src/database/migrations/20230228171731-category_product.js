'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('category_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      created_by:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_by:{
        type: Sequelize.INTEGER
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deleted_by:{
        type: Sequelize.INTEGER
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('category_products');
  }
};
