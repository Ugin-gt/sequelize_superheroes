const path = require('path');
const { Router } = require('express');
const heroController = require('../controller/superhero.controller');
const paginate = require('../middlewares/paginate.mw');
const uploadImage = require('../middlewares/upload.image');


const heroRouter = Router();

heroRouter.get('/', paginate, heroController.getSuperHeroes);
heroRouter.post('/', heroController.createSuperhero);

heroRouter.get('/:id', heroController.getSuperhero);
heroRouter.patch('/:id', heroController.updateSuperHero);
heroRouter.delete('/:id', heroController.deleteSuperHero);

heroRouter.post('/:id/images', uploadImage, heroController.addImageHero);

module.exports = heroRouter;
