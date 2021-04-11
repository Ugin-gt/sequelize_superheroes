const createError = require('http-errors');
const { Superhero, Image, Superpower } = require('../models');


module.exports.createSuperhero = async (req, res, next) => {
  try {
    const { body } = req;
    const heroPowers = findAll(body, ['superPower']);
    const heroImages = findAll(body, ['imagePath']);
    const heroPowersArray = heroPowers.map(stringSuperpowers => {
      return { superPower: stringSuperpowers };
    });
    const heroImagesArray = heroImages.map(stringImg => {
      return { imagePath: stringImg };
    });

    const createdSuperhero = await Superhero.create(body);
    const superpowers = await Superpower.bulkCreate(heroPowersArray);
    const images = await Image.bulkCreate(heroImagesArray);

    await createdSuperhero.addSuperpower(superpowers);
    await createdSuperhero.addImage(images);

    if (!createdSuperhero) {
      return next(createError(400));
    }
    res.status(201).send({ data: createdSuperhero });
  } catch (err) {
    next(err);
  }
};

module.exports.getSuperHeroes = async (req, res, next) => {
  try {
    const { pagination } = req;
    const heroes = await Superhero.findAll({
      ...pagination,
    });

    if (!heroes.length) {
      return next(createError(404, 'Super Heroes not found'));
    }

    res.status(200).send({ data: heroes });
  } catch (err) {
    next(err);
  }
};

module.exports.getSuperhero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const superHero = await Superhero.findAll({
      where: { id },
      include: [
        { model: Superpower, attributes: { exclude: ['superheroId'] } },
        { model: Image, attributes: { exclude: ['superheroId'] } },
      ],
    });
    if (!superHero) {
      const err = createError(404, 'Super Hero not found');
      return next(err);
    }

    res.send({ data: superHero });
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

    res.send({ data: rowsCount });
  } catch (err) {
    next(err);
  }
};

module.exports.addHeroImages = async (req, res, next) => {
  try {
    const {
      files,
      params: { id },
    } = req;
    const files = Superhero.map({ images: [filename] });

    const [count, [addHeroImages]] = await Superhero.update(
      { images: [filename] },
      {
        where: { id: id },
        returning: true,
      }
    );
    if (count !== 1) {
      return next(createError(400, 'Super Hero cant be updated'));
    }

    res.send(addHeroImages);
  } catch (err) {
    next(err);
  }
};
