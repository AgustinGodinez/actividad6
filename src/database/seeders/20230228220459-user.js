'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      nombre: 'Admin',
      apellido_paterno: 'Admin',
      apellido_materno: 'Admin',
      email: 'admin@changarrito.com',
      password: '$2b$10$bMfroggXNwI578xu2WRjSeaf6KCqLibptwK3JMLWYuUk.kYVj4Am2', // admin2023
      rol_id: 3,
      created_by: 1,
      createdAt: new Date()
    },
  {
    nombre: 'Carlos',
    apellido_paterno: 'Hernández',
    apellido_materno:'González',
    curp: 'HEGC920615HMLLDS00',
    rfc: 'HEGC920615ABC',
    fecha_nacimiento: '25/03/2023',
    email: 'carlos.hernandez@mail.com',
    password: '$2a$10$X2KoNCB.iQmbvn4kggdNYOm1cmgljFrCBEraxCBx5GHKO3r18s.z6',
    celular: '5512345678',
    rol_id: 1,
    created_by: 1,
    createdAt: new Date()
  }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
