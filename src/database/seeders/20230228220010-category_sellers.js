'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Category_sellers', [{
      nombre: 'Restaurante',
      created_by: 1
    },
    {
      nombre: 'Fast Food',
      created_by: 1
    },
    {
      nombre: 'Fonda',
      created_by: 1
    },
    {
      nombre: 'Bar',
      created_by: 1
    },
    {
      nombre: 'Cafetería',
      created_by: 1
    },
    {
      nombre: 'Food truck',
      created_by: 1
    },
    {
      nombre: 'Fuente de Sodas',
      created_by: 1
    },
    {
      nombre: 'Drives Inn',
      created_by: 1
    },
    {
      nombre: 'Bar',
      created_by: 1
    },
    {
      nombre: 'Taberna',
      created_by: 1
    },
    {
      nombre: 'Restaurant Buffet',
      created_by: 1
    },
    {
      nombre: 'Abarrotes',
      created_by: 1
    },
    {
      nombre: 'Verduras y Legumbres',
      created_by: 1
    },
    {
      nombre: 'Materias Primas',
      created_by: 1
    }], {});
  },

  async down (queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('Category_sellers', null, {});
  }
};
