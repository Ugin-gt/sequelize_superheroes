const { Router } = require('express');
const heroRouter = require('./superhero');
const powerRouter = require('./superpower');
const imageRouter = require('./image');

const router = Router();

router.use('/superheroes', heroRouter);
router.use('/superpowers', powerRouter);
router.use('/heroimages', imageRouter);

module.exports = router;
