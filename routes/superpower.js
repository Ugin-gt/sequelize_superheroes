const { Router } = require('express');
const powerController = require('../controller/superpower.controller');
const paginate = require('../middlewares/paginate.mw');

const powerRouter = Router();

powerRouter.post('/', powerController.createSuperpowers);
powerRouter.get('/', paginate, powerController.getAllSuperpowers);

powerRouter.get('/:id', powerController.getSuperpower);
powerRouter.delete('/:id', powerController.deleteSuperpower);


module.exports = powerRouter;