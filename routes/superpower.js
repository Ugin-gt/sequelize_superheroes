const { Router } = require('express');
const powerController = require('../controller/superpower.controller');
const paginate = require('../middlewares/paginate.mw');

const superpowerRouter = Router();

superpowerRouter.post('/create', powerController.createSuperpower);
superpowerRouter.get('/get/:id', powerController.getSuperpower);
superpowerRouter.get('/getAll', paginate, powerController.getAllSuperpowers);
superpowerRouter.delete('/delete/:id', powerController.deleteSuperpower);
superpowerRouter.patch('/update/:id', powerController.updateSuperpower);

module.exports = superpowerRouter;