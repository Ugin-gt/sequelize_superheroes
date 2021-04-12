'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('superpowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      superPowers: {
        field: 'super_powers',
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      superheroId: {
        field: 'superhero_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'superheroes',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('superpowers');
  },
};
