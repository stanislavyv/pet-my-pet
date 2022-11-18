const { Router } = require('express');

const router = Router();

const petController = require('./controllers/petController');
const userController = require('./controllers/userController');

router.use('/pets', petController);

router.use('/users', userController);

module.exports = router;
