'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    static associate (models) {
      Superpower.belongsTo(models.Superhero, {
        foreignKey: 'superheroId',
      });
    }
  }
  Superpower.init({
      superPowers: {
        field:'super_powers',
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    { sequelize,
      modelName: 'Superpower',
      tableName: 'superpowers',
      underscored: true,
    }
  );
  return Superpower;
};
