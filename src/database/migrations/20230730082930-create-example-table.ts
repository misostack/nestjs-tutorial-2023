'use strict';

import { ExampleTableName } from 'src/pet/models/example.model';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(ExampleTableName, {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      flag: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      title: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING, // 255
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '',
      },
      image: {
        type: Sequelize.BLOB,
        allowNull: true,
        default: '',
      },
      rate: {
        type: Sequelize.INTEGER({ length: 2 }),
      },
      aBigIntNumber: {
        type: Sequelize.BIGINT,
      },
      aFloat: {
        type: Sequelize.FLOAT(12, 3),
      },
      aDouble: {
        type: Sequelize.DOUBLE(24, 3),
      },
      aDecimal: {
        type: Sequelize.DECIMAL(24, 3),
      },
      population: {
        type: Sequelize.INTEGER.UNSIGNED,
      },
      orderId: {
        type: Sequelize.INTEGER.UNSIGNED.ZEROFILL,
      },
      birthDay: {
        type: Sequelize.DATEONLY,
      },
      myDate: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      },
      zodiacHour: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['active', 'inactive', 'pending'],
      },
      settings: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: {},
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(ExampleTableName);
  },
};
