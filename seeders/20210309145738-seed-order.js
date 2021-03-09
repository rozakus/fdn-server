'use strict';
const { Product } = require('../models')

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
    await queryInterface.bulkInsert('Orders', [{
      UserId: 2,
      ProductId: 1,
      quantity: 1,
      total_price: 110_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      UserId: 2,
      ProductId: 5,
      quantity: 2,
      total_price: 300_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      UserId: 2,
      ProductId: 10,
      quantity: 5,
      total_price: 1000_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 5,
      ProductId: 2,
      quantity: 1,
      total_price: 120_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 5,
      ProductId: 3,
      quantity: 2,
      total_price: 260_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 5,
      ProductId: 3,
      quantity: 4,
      total_price: 420_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 7,
      ProductId: 3,
      quantity: 5,
      total_price: 650_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 7,
      ProductId: 4,
      quantity: 2,
      total_price: 280_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 7,
      ProductId: 5,
      quantity: 2,
      total_price: 300_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 7,
      ProductId: 6,
      quantity: 3,
      total_price: 480_000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
