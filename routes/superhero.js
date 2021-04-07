const { Router } = require('express');
const HeroController = require('../controller/superhero.controller');
const paginate = require('../middlewares/paginate.mw');

const heroRouter = Router();

heroRouter.get('/', paginate, HeroController.getSuperhero);
heroRouter.post('/', HeroController.createSuperhero);

// heroRouter.get('/:id', UserController.getUser);
// heroRouter.patch('/:id', UserController.updateUser);
// heroRouter.delete('/:id', UserController.deleteUser);

module.exports = heroRouter;