"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ExamAnalyst", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      highGrade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      commonGrade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      lowGrade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      comments: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ExamAnalyst");
  },
};
