const routes = require('express').Router();

const {
    getAll,
    getById,
    createPet,
    editPet,
    doesPetExist,
    likeUnlikePet,
    deletePet,
} = require('../services/petService');

const authenticate = require('../middlewares/authenticate');
const isUserCreator = require('../middlewares/isUserCreator');

const {
    validatePet,
    validateDescription,
} = require('../middlewares/validator');
const { validationResult } = require('express-validator');

// GET ALL PETS
routes.get('/', (req, res) => {
    getAll(req.query)
        .then((pets) => {
            return res.status(200).json(pets);
        })
        .catch((e) => {
            return res.status(400).json({ message: 'Bad Request' });
        });
});

// GET BY ID
routes.get('/:id', (req, res) => {
    const id = req.params.id;

    try {
        getById(id).then((pet) => {
            res.status(200).json(pet);
        });
    } catch (e) {
        res.status(404).json({ message: 'Pet Not Found' });
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

    createPet(data, req.uid).then((result) => {
        return res.status(201).json(result);
    });
});

// EDIT
routes.patch(
    '/:id/edit',
    authenticate(),
    isUserCreator(),
    validateDescription,
    (req, res) => {
        const id = req.params.id;
        const description = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({ message: errors.array()[0].msg });
        }

        return editPet(id, description).then((result) => {
            res.status(200).json(result);
        });
    }
);

// LIKE
routes.patch('/:id/like', authenticate(), (req, res) => {
    const id = req.params.id;

    likeUnlikePet(req.uid, id).then((pet) => {
        res.status(200).json(pet);
    });
});

// DELETE
routes.delete('/:id', authenticate(), isUserCreator(), (req, res) => {
    const id = req.params.id;

    try {
        return deletePet(id).then((result) => {
            res.status(200).json(result);
        });
    } catch (e) {
        return res.status(500).json({ message: 'Unable to delete pet.' });
    }
});

module.exports = routes;
