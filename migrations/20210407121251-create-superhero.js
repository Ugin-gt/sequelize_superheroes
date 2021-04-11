'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('superheroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickName: {
        field: 'nick_name',
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      realName: {
        field: 'real_name',
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      originDescription: {
        field: 'origin_description',
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cathPhrase: {
        field: 'cath_phrase',
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('superheroes');
  },
};
