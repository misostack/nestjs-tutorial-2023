'use strict';

import { PetCategoryTableName } from 'src/pet/models/pet-category.model';

import { v4 as uuidv4 } from 'uuid';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      PetCategoryTableName,
      [
        { id: uuidv4(), name: 'Dogs' },
        { id: uuidv4(), name: 'Cats' },
        { id: uuidv4(), name: 'Pigs' },
        { id: uuidv4(), name: 'Birds' },
        { id: uuidv4(), name: 'Others' },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(PetCategoryTableName, null, {});
  },
};
