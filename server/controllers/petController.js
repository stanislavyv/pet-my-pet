const routes = require('express').Router();
const {
    getAll,
    getById,
    getByCategory,
    createPet,
    editPet,
    doesPetExist,
} = require('../services/petService');

const authenticate = require('../middlewares/authenticate');
const {
    validatePet,
    validateDescription,
} = require('../middlewares/validator');
const { validationResult } = require('express-validator');

// GET ALL PETS
routes.get('/', (req, res) => {
    getAll().then((pets) => {
        res.status(200).json(pets);
    });
});

// GET BY CATEGORY
routes.get('/categories/:category', (req, res) => {
    const category = req.params.category;

    try {
        getByCategory(category).then((pets) => {
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
        getById(id).then((pet) => {
            res.status(200).json(pet);
        });
    } catch (e) {
        console.log(e);
    }
});

// CREATE
routes.post('/', authenticate(), validatePet, async (req, res) => {
    const data = req.body;

    const petExists = await doesPetExist(data.name);

    if (petExists) {
        return res.json({
            message: 'A pet with that name already exists.',
        });
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({ message: errors.array()[0].msg });
    }

    createPet(data).then((result) => {
        return res.status(201).json(result);
    });
});

// EDIT
routes.patch('/:id/edit', authenticate(), validateDescription, (req, res) => {
    const id = req.params.id;
    const description = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({ message: errors.array()[0].msg });
    }

    return editPet(id, description).then((result) => {
        res.status(200).json(result);
    });
});

module.exports = routes;
