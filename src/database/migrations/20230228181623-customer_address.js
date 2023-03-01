'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('customer_addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cp: {
        allowNull: false,
        type: Sequelize.STRING(5)
      },
      estado: {
        allowNull: false,
        type: Sequelize.STRING(120)
      },
      ciudad: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      municipio: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      colonia: {
        allowNull: false,
        type: Sequelize.STRING(120)
      },
      calle: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      numero_ext: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      numero_int: {
        type: Sequelize.STRING(30)
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users'
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
    await queryInterface.dropTable('customer_addresses');
  }
};
