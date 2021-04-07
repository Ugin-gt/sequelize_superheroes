'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Superheroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickName: {
        type: Sequelize.STRING,
        field: 'nick_name',
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      realName: {
        type: Sequelize.STRING,
        field: 'real_name',
        allowNull: false,
        type: Sequelize.STRING(228),
      },
      originDescription: {
        field: 'origin_description',
        allowNull: false,
        type: Sequelize.TEXT,
      },
      superPowers: {
        field: 'super_powers',
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      cathPhrase: {
        field: 'cath_phrase',
        allowNull: false,
        type: Sequelize.STRING,
      },
       images: {
        field: 'images',
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
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
    await queryInterface.dropTable('Superheroes');
  },
};
