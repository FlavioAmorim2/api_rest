"use strict";
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    //  * Example:
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "John",
          email: 'jhon2@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Pele",
          email: 'pele@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Ronaldo",
          email: 'ronaldo@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
  },

  async down() {},
};
