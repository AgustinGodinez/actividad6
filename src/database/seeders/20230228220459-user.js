'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      nombre: 'Admin',
      apellido_paterno: 'Admin',
      apellido_materno: 'Admin',
      email: 'admin@changarrito.com',
      password: 'admin2023',
      rol_id: 3,
      created_by: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
