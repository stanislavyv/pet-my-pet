const routes = require('express').Router();

const {
    createUser,
    getById,
    doesUserExist,
} = require('../services/userService');

const { validateUser } = require('../middlewares/validator');
const { validationResult } = require('express-validator');

// GET BY id
routes.get('/:id', (req, res) => {
    const id = req.params.id;

    try {
        getById(id).then((user) => {
            res.status(200).json(user);
        });
    } catch (e) {
        res.status(404).json({ message: 'User Not Found' });
    }
});

// CREATE
routes.post('/', validateUser, async (req, res) => {
    const data = req.body;

    const userExists = await doesUserExist(data.username);

    if (userExists) {
        return res.json({
            message: 'An user with that username already exists.',
        });
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({ message: errors.array()[0].msg });
    }

    createUser(data)
        .then((result) => {
            return res.status(201).json(result);
        })
        .catch((e) => {
            res.json(e);
        });
});

module.exports = routes;
