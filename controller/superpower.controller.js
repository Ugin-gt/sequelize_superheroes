const createError = require('http-errors');
const { Superpower } = require('../models');

module.exports.createSuperpowers = async (req, res, next) => {
  try {
    const { body } = req;

    const heroPowers = findAll(body, ['superPowers']);
    const heroPowersArray = heroPowers.map(stringSuperpowers => {
      return { superPower: stringSuperpowers };
    });
    const createdSuperpower = await Superpower.bulkCreate(heroPowersArray);

    if (!createdSuperpower) {
      return next(createError(400));
    }

    res.status(201).send({
      data: createdSuperpower,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllSuperpowers = async (req, res, next) => {
  try {
    const { pagination = {} } = req;

    const superpowers = await Superpower.findAll({
      ...pagination,
    });

    if (!superpowers.length) {
      return next(createError(404, 'Superpowers not found'));
    }

    res.send({ data: superpowers });
  } catch (err) {
    next(err);
  }
};

module.exports.getSuperpower = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const superpower = await Superpower.findByPk(id);

    if (!superpower) {
      const err = createError(404, 'Superpower not found');
      return next(err);
    }

    res.send(superpower);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteSuperpower = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
  
    const rowsCount = await Superpower.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, 'Superpower not found'));
    }

    res.send({ data: rowsCount });
  } catch (err) {
    next(err);
  }
};
