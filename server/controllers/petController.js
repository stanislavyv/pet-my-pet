const routes = require('express').Router();
const petService = require('../services/petService');

const authenticate = require('../middlewares/authenticate');

// GET ALL PETS
routes.get('/', (req, res) => {
    petService.getAll().then((pets) => {
        res.status(200).json(pets);
    });
});

// GET BY CATEGORY
routes.get('/categories/:category', (req, res) => {
    const category = req.params.category;

    try {
        petService.getByCategory(category).then((pets) => {
            res.status(200).json(pets);
        });
    } catch (e) {
        console.log(e);
    }
});

// GET BY ID
routes.get('/:id', (req, res) => {
    const id = req.params.id;

    try {
        petService.getById(id).then((pet) => {
            res.status(200).json(pet);
        });
    } catch (e) {
        console.log(e);
    }
});

// CREATE
routes.post('/create', authenticate(), (req, res) => {
    const data = req.body;  
});

module.exports = routes;
