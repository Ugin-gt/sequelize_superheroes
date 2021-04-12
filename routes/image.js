const { Router } = require('express');
const imageController = require('../controller/image.controller');
const paginate = require('../middlewares/paginate.mw');
const uploadImage = require('../middlewares/upload.image');

const imageRouter = Router();


imageRouter.post('/', uploadImage, paginate, imageController.createHeroImages);
imageRouter.get('/', paginate, imageController.getAllImages);

imageRouter.get('/:id', imageController.getHeroImage);
imageRouter.delete('/id:', imageController.deleteHeroImage);

module.exports = imageRouter;