'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_products', [
      { 
        nombre: 'Pastas', 
        url_image: 'https://storage.cloud.google.com/changarrito-d9691.appspot.com/categorias/pasta.jpg',
        active: true,
        createdAt: new Date(),
        created_by: 1
      },
      { 
        nombre: 'Mexicana', 
        url_image: 'https://storage.cloud.google.com/changarrito-d9691.appspot.com/categorias/Mexicana.jpg',
        active: true,
        createdAt: new Date(),
        created_by: 1 
      },
      { 
        nombre: 'Postres', 
        url_image: 'https://storage.cloud.google.com/changarrito-d9691.appspot.com/categorias/postre.jpg', 
        active: true,
        createdAt: new Date(),
        created_by: 1 
      },
      { 
        nombre: 'Saludable', 
        url_image: 'https://storage.cloud.google.com/changarrito-d9691.appspot.com/categorias/Saludable.jpg', 
        active: true,
        createdAt: new Date(),
        created_by: 1 
      },
      { 
        nombre: 'Hanburguesas', 
        url_image: 'https://storage.cloud.google.com/changarrito-d9691.appspot.com/categorias/Hamburguesa.jpg', 
        active: true,
        createdAt: new Date(),
        created_by: 1 
      },
      { 
        nombre: 'Tacos', 
        url_image: 'https://storage.cloud.google.com/changarrito-d9691.appspot.com/categorias/tacos.jpg', 
        active: true,
        createdAt: new Date(),
        created_by: 1 
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category_products', null, {});
  }
};
