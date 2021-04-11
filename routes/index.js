const { Router } = require('express');
const heroRouter = require('./superhero');
const powerRouter = require('./superpower');
const imageRouter = require('./image');

const router = Router();

router.use('/heroes', heroRouter);
router.use('/superpowers', powerRouter);
router.use('/images', imageRouter);

module.exports = router;
