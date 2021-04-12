const createError = require('http-errors');
const { Superhero, Image } = require('../models');

module.exports.createHeroImages = async (req, res, next) => {
  try {
    const { body } = req;

    const heroImages = findAll(body, ['imagePath']);
    const heroImagesArray = heroImages.map(stringImg => {
      return { imagePath: stringImg };
    });
    const createdHeroImages = await Image.bulkCreate(heroImagesArray);

    if (!createdHeroImages) {
      return next(createError(400));
    }

    res.status(201).send({ data: createdHeroImages });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllImages = async (req, res, next) => {
  try {
    const { pagination = {} } = req;

    const heroesImages = await Image.findAll({
      ...pagination,
    });

    if (!heroesImages.length) {
      return next(createError(404, 'Heroes Images not found'));
    }

    res.send({ data: heroesImages });
  } catch (err) {
    next(err);
  }
};

module.exports.getHeroImage = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const heroImage = await Image.findByPk(id);

    if (!heroImage) {
      const err = createError(404, 'Hero Image not found');
      return next(err);
    }

    res.send({ date: heroImage });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteHeroImage = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const rowsCount = await Image.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, 'Superpower Hero Image not found'));
    }

    res.send({ data: rowsCount });
  } catch (err) {
    next(err);
  }
};
