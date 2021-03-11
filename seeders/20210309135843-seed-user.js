'use strict';
const { hashPassword } = require('../helpers/password')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [{
      firstname: 'inaz',
      lastname: 'rabuu',
      email: 'inazrabuu@hotmail.com',
      password: hashPassword('#Pa55w0rd123#'),
      role: 'admin',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user01',
      lastname: 'last',
      email: 'user01@hotmail.com',
      password: hashPassword('user01'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user02',
      lastname: 'last',
      email: 'user02@hotmail.com',
      password: hashPassword('user02'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user03',
      lastname: 'last',
      email: 'user03@hotmail.com',
      password: hashPassword('user03'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user04',
      lastname: 'last',
      email: 'user04@hotmail.com',
      password: hashPassword('user04'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user05',
      lastname: 'last',
      email: 'user05@hotmail.com',
      password: hashPassword('user05'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user06',
      lastname: 'last',
      email: 'user06@hotmail.com',
      password: hashPassword('user06'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user07',
      lastname: 'last',
      email: 'user07@hotmail.com',
      password: hashPassword('user07'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user08',
      lastname: 'last',
      email: 'user08@hotmail.com',
      password: hashPassword('user08'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user09',
      lastname: 'last',
      email: 'user09@hotmail.com',
      password: hashPassword('user09'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      firstname: 'user10',
      lastname: 'last',
      email: 'user10@hotmail.com',
      password: hashPassword('user10'),
      role: 'user',
      createdAt: new Date (),
      updatedAt: new Date ()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
