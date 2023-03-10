'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Category_sellers', [{
      nombre: 'Restaurante',
      createdAt: new Date(),
      created_by: 1,
    },
    {
      nombre: 'Fast Food',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Fonda',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Bar',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Cafetería',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Food truck',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Fuente de Sodas',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Drives Inn',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Bar',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Taberna',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Restaurant Buffet',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Abarrotes',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Verduras y Legumbres',
      createdAt: new Date(),
      created_by: 1
    },
    {
      nombre: 'Materias Primas',
      createdAt: new Date(),
      created_by: 1
    }], {});
  },

  async down (queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('Category_sellers', null, {});
  }
};
