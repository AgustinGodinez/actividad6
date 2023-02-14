'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Products', [
      {
        image: 'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Huevos Rancheros/Divorciados',
        price: 105.00,
        start: 4,
        ranking: 4.1,
        description: '2 Huevos estrellados Bañados en salsa verde o roja Sobre Tortilla frita acompañados de Frijoles Refritos.',
        createdAt: new Date()
      },
      {
        image: 'https://tb-static.uber.com/prod/image-proc/processed_images/af2ac3ded8fdfe73ad4cb738c0d57f17/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        title: 'Molletes',
        price: 70.00,
        start: 5,
        ranking: 4.9,
        description: '2 Medios bolillos Con frijoles, Queso y Topping a elegir.',
        createdAt: new Date()
      },
      {
        image: 'https://previews.123rf.com/images/redspruce/redspruce1307/redspruce130700009/20867820-food-vector-icons.jpg',
        title: 'Panuchos de Cochinita Pibil',
        price: 100.00,
        start: 4,
        ranking: 4.5,
        description: '3 piezas de Panuchos de Cochinita estilo Yucateco. Acompañados de cebollas moradas y salsa habanero por aparte.',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/d6ec9c64-ff9e-469a-b931-b03eedc84809.jpeg',
        title: 'Taco de torta de papa con arroz',
        price: 55.00,
        start: 3,
        ranking: 3.1,
        description: 'Taco de torta de papa con arroz aprox. 110 grms.',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/f9cda433-dce9-49e4-8b0c-81496a08d8e6.jpeg',
        title: 'Chile Relleno',
        price: 115.00,
        start: 4,
        ranking: 4.1,
        description: 'Orden de Chile Relleno en caldillo rojo 200grms acompañado de la guarnición de su elección.',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/e825c02c-3169-4c74-9b5b-602b71a32238.jpeg',
        title: 'Enchiladas Verdes/Rojas',
        price: 120.00,
        start: 5,
        ranking: 5.0,
        description: '3 piezas de enchiladas con tortilla hecha a mano.',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/26743e84-df12-444c-b20d-1fd9207c291f.jpeg',
        title: 'Cecina de Yecapixtla',
        price: 140.00,
        start: 5,
        ranking: 4.9,
        description: 'Cecina de Yecapixtla 250 grms. acompañado de la guarnición de su elección. Incluye 3 tortillas y pequeña porción de enchiladas de la casa.',
        createdAt: new Date()
      },
      {
        image: 'https://images.pexels.com/photos/10305696/pexels-photo-10305696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Chilaquiles',
        price: 109.00,
        start: 4,
        ranking: 4.5,
        description: 'Chilaquiles con huevo 1 pieza Incluye : café o te , jugo o fruta .',
        createdAt: new Date()
      },
      {
        image: 'https://media.istockphoto.com/id/898368964/es/foto/fondos-de-comida-regional-comida-oaxaque%C3%B1a-huevo-con-frijoles.jpg?s=1024x1024&w=is&k=20&c=k2nnJRivUPsUEIdbRRU9dgOXRYmqdfVmeXycxrao3Ac=',
        title: 'Huevos a la Mexicana',
        price: 89.00,
        start: 4,
        ranking: 4.3,
        description: 'Incluye : café o te , jugo o fruta y tortillas hechas a mano .',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/31ee80ec-eedb-44dd-a5dd-69444767694b.jpeg',
        title: 'Pancita',
        price: 160.00,
        start: 4,
        ranking: 4.1,
        description: '750ml de pancita, con 5 tortillas hechas a mano, cebolla picada, limones y dos chiles de árbol',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/bb8a9e63-45cf-4016-b255-9852bd8dcf23.jpeg',
        title: 'Pozole blanco',
        price: 160.00,
        start: 4,
        ranking: 4.4,
        description: 'un litro de pozole blanco acompañado de una tostada sola, porción de chicharrón y 1/4 de aguacate',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/9633ab48-ff4a-4ef6-93a3-47d883247595.jpeg',
        title: 'Pechuga empanizada',
        price: 148.00,
        start: 4,
        ranking: 4.1,
        description: 'pechuga empanizada con porción de frijoles, arroz, ensalada y 5 tortillas hechas a mano',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/799eb1a4-090b-4c1b-9f8d-a4173fad602e.jpeg',
        title: 'Tacos dorados',
        price: 86.00,
        start: 4,
        ranking: 4.1,
        description: '3 Tacos dorados del complemento que prefiera, frijoles, lechuga, aguacate, jitomate, crema y queso',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/53dbffe5-b16d-4712-b1b6-b83751f3899e.jpeg',
        title: 'Tacos pastor',
        price: 21.00,
        start: 5,
        ranking: 5.0,
        description: '1 taco de pastor con cebolla, cilantro, limones, salsa y rábanos',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/53dbffe5-b16d-4712-b1b6-b83751f3899e.jpeg',
        title: 'Tacos suadero',
        price: 24.00,
        start: 4,
        ranking: 4.1,
        description: '1 taco de suadero con cebolla, cilantro, limones, salsa y rábanos',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/79fe09a0-f93b-4bae-b6b0-20c3becdf5da.jpeg',
        title: 'Alambres',
        price: 163.00,
        start: 4,
        ranking: 4.1,
        description: '1 Alambre de la carne de su preferencia, queso oaxaca, pimiento, champiñones, cebolla, 5 tortillas hechas a mano, limones, salsa y rábanos',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/79fe09a0-f93b-4bae-b6b0-20c3becdf5da.jpeg',
        title: 'Gringa',
        price: 82.00,
        start: 4,
        ranking: 4.1,
        description: '1 Gringa de dos tortillas de harina, pastor con queso oaxaca, limones, salsa y rábanos',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/1b1b93ac-af2f-449c-96af-58e743c9cd7e.jpeg',
        title: 'Agua de jamaica de 1 litro',
        price: 65.00,
        start: 5,
        ranking: 5.0,
        description: 'Agua de jamaica natural.',
        createdAt: new Date()
      },
      {
        image: 'https://tb-static.uber.com/prod/image-proc/processed_images/48194bf45cbe55cc6853e849d77c0197/b4facf495c22df52f3ca635379ebe613.jpeg',
        title: 'Jarrito Sabor Tamarindo',
        price: 38.00,
        start: 4,
        ranking: 4.1,
        description: 'Refresco sabor tamarindo de 600 ml',
        createdAt: new Date()
      },
      {
        image: 'https://tb-static.uber.com/prod/image-proc/processed_images/f6ce8eafb15053b523b0a77302ca58d5/b4facf495c22df52f3ca635379ebe613.jpeg',
        title: 'Jarrito Sabor toronja',
        price: 38.00,
        start: 4,
        ranking: 4.1,
        description: 'Refrescos sabor toronja de 600 ml',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/9725eaa7-37e6-4669-88ae-d6ae3d2c95bf.jpeg',
        title: 'Cerveza Corona',
        price: 77.00,
        start: 4,
        ranking: 4.1,
        description: 'Cerveza Corona 473 ml',
        createdAt: new Date()
      },
      {
        image: 'https://d1ralsognjng37.cloudfront.net/0219c5d5-5343-4e7c-9d6a-27d7629caa0a.jpeg',
        title: 'Cerveza Victoria',
        price: 77.00,
        start: 4,
        ranking: 4.1,
        description: 'Cerveza Victoria 473 ml',
        createdAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
