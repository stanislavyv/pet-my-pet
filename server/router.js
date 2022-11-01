const { Router } = require('express');

const router = Router();

const petController = require('./controllers/petController');

router.use('/pets', petController);

module.exports = router;
