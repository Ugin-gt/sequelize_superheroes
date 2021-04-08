const path = require('path');
const { Router } = require('express');
const multer = require('multer');
const HeroController = require('../controller/superhero.controller');
const paginate = require('../middlewares/paginate.mw');

const upload = multer({ dest: path.resolve(__dirname, '../public/images') });
const heroRouter = Router();

heroRouter.get('/', paginate, HeroController.getSuperhero);
heroRouter.post('/', HeroController.createSuperhero);
heroRouter.post('/:id/image', upload.single('image'), HeroController.addImage);
// heroRouter.get('/:id', UserController.getUser);
// heroRouter.patch('/:id', UserController.updateUser);
// heroRouter.delete('/:id', UserController.deleteUser);

module.exports = heroRouter;
