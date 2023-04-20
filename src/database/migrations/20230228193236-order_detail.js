'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('order_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      precio: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      cantidad: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      subtotal: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'orders'
          },
          key: 'id'
        }
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'products'
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
    await queryInterface.dropTable('order_details');
  }
};
