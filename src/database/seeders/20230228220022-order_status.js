'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('order_statuses', [{
       descripcion: 'Recibido',
       createdAt: new Date(),
       created_by: 1
    },
    {
      descripcion: 'Enviado',
      createdAt: new Date(),
      created_by: 1
    },
    {
      descripcion: 'Pagado',
      createdAt: new Date(),
      created_by: 1
    },
    {
      descripcion: 'Cancelado',
      createdAt: new Date(),
      created_by: 1
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('order_statuses', null, {});
  }
};
