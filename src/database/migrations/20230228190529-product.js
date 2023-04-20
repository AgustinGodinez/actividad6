'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
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
      descripcion: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      precio: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      disponible: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      product_category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'category_products'
          },
          key: 'id'
        }
      },
      seller_id: {
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
    await queryInterface.dropTable('products');
  }
};
