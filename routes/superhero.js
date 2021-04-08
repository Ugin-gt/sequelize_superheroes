const path = require('path');
const { Router } = require('express');
const multer = require('multer');
const HeroController = require('../controller/superhero.controller');
const paginate = require('../middlewares/paginate.mw');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, STATIC_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ dest: path.resolve(__dirname, '../public/images') });
const heroRouter = Router();

heroRouter.get('/', paginate, HeroController.getSuperHeroes);
heroRouter.post('/', HeroController.createSuperhero);

heroRouter.get('/:id', HeroController.getSuperhero);
heroRouter.patch('/:id', HeroController.updateSuperHero);
heroRouter.delete('/:id', HeroController.deleteSuperHero);

heroRouter.post('/:id/image', upload.single('image'), HeroController.addImage);

module.exports = heroRouter;
