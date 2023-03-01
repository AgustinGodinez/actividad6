'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_product', [{
      nombre: 'Comida Mexicana',
      url_image: '',
      created_by: 1
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category_product', null, {});
  }
};
