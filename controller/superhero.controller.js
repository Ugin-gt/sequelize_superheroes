const createError = require('http-errors');
const { Superhero } = require('../models');

module.exports.createSuperhero = async (req, res, next) => {
  try {
    const { body } = req;
    const createdSuperhero = await Superhero.create(body);

    if (!createdSuperhero) {
      return next(createError(400));
    }

    res.status(201).send({
      data: createdSuperhero,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getSuperHeroes = async (req, res, next) => {
  try {
    const { pagination = {} } = req;
    const heroes = await Superhero.findAll({
      ...pagination,
    });

    if (!heroes.length) {
      return next(createError(404, 'Super Heroes not found'));
    }

    res.status(200).send({
      data: heroes,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getSuperhero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const superHero = await Superhero.findByPk(id, {});

    if (!superHero) {
      const err = createError(404, 'Super Hero not found');
      return next(err);
    }

    res.send(superHero);
  } catch (err) {
    next(err);
  }
};

module.exports.updateSuperHero = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [rowsCount, [updateSuperHero]] = await Superhero.update(body, {
      where: { id },
      returning: true,
    });

    if (rowsCount !== 1) {
      return next(createError(400, 'Super Hero cant be updated'));
    }

    res.send({ data: updateSuperHero });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteSuperHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const rowsCount = await Superhero.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, 'Super Hero not found'));
    }

    res.send({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports.addImageHero = async (req, res, next) => {
  try {
    const {
      file: { filename },
      params: { id },
    } = req;

    const [count, [addImageHero]] = await Superhero.update(
      { imagePath: filename },
      {
        where: { id: id },
        returning: true,
      }
    );
    if (count !== 1) {
      return next(createError(400, 'Super Hero cant be updated'));
    }

    res.send(addImageHero);
  } catch (err) {
    next(err);
  }
};
