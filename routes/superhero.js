const { Router } = require('express');
const heroController = require('../controller/superhero.controller');
const paginate = require('../middlewares/paginate.mw');
const uploadImage = require('../middlewares/upload.image');

const heroRouter = Router();

heroRouter.post('/', uploadImage, heroController.createSuperhero);
heroRouter.get('/', paginate, heroController.getSuperHeroes);

heroRouter.get('/:id', heroController.getSuperhero);
heroRouter.patch('/:id', heroController.updateSuperHero);
heroRouter.delete('/:id', heroController.deleteSuperHero);

module.exports = heroRouter;
