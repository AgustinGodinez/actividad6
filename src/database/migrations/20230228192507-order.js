'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      },
      total: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      cantidad: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      delivered: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      paid: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      customer_address_send: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'customer_addresses'
          },
          key: 'id'
        }
      },
      customaer_address_invoicing: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'customer_addresses'
          },
          key: 'id'
        }
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'sellers'
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
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_by: {
        type: Sequelize.INTEGER
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
