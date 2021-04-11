const createError = require('http-errors');
const { Superhero, Image } = require('../models');

module.exports.addImgToHero = async (req, res, next) => {
  try {
    const {
      body,
      file: { filename },
    } = req;

    const heroImages = await Image.create({
      imagePath: filename,
      superheroId: body.superheroId,
    });

    const hero = await Superhero.findByPk(body.superheroId, {
      include: { model: Image },
    });

    if (!hero || !heroImages) {
      const err = createError(404, 'Not found');
      return next(err);
    }

    res.send({ data: hero });
  } catch (err) {
    next(err);
  }
};
