const { Router } = require('express');
const imageController = require('../controller/image.controller');
const paginate = require('../middlewares/paginate.mw');
const uploadImage = require('../middlewares/upload.image');

const imageRouter = Router();


imageRouter.post('/add/:id/images', uploadImage, imageController.addHeroImages);

module.exports = imageRouter;