"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("categories", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true, // Importante que o nome seja único para não criar 2 categorias iguais.
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable("categories")
  },
}
