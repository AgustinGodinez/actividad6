'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [{
      nombre: 'Customer',
      created_by: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Seller',
      created_by: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Administrator',
      created_by: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
