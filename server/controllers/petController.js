const routes = require('express').Router();
const petService = require('../services/petService');

// GET ALL PETS
routes.get('/', (req, res) => {
    petService.getAll().then((pets) => {
        res.status(200).json(pets);
    });
});

// GET ONE PET
routes.get('/:id', (req, res) => {
    const id = req.params.id;

    try {
        petService.getById(id).then((pet) => {
            res.status(200).json(pet);
            console.log(pet);
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = routes;
