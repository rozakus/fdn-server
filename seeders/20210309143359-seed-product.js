'use strict';

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
    await queryInterface.bulkInsert('Products', [{
      item: 'Skincare',
      price: 110_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Body Lotion',
      price: 120_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Shampoo',
      price: 130_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Sun Block',
      price: 140_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Foundation',
      price: 150_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Night Cream',
      price: 160_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Day Cream',
      price: 170_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Toner',
      price: 180_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Lip Balm',
      price: 190_000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Fragrance',
      price: 200_000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
