'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    static associate (models) {
      Superhero.hasMany(models.Superpower, {
        foreignKey: 'superheroId',
      });
      Superhero.hasMany(models.Image, {
        foreignKey: 'superheroId',
      });
    }
  }
  Superhero.init(
    {
      nickName: {
        field: 'nick_name',
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        field: 'origin_description',
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      cathPhrase: {
        field: 'cath_phrase',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Superhero',
      tableName: 'superheroes',
      underscored: true,
    }
  );
  return Superhero;
};
