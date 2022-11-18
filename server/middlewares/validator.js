const { body } = require('express-validator');

const IMAGE_URL_PATTERN = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

const USERNAME_PATTERN = /^[a-zA-Z0-9\-!@#$%^&*+\-_]{4,}$/;

const EMAIL_PATTERN =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

exports.validateDescription = [
    body('description')
        .notEmpty()
        .withMessage('Description cannot be empty')
        .isLength({ min: 10, max: 50 })
        .withMessage('Description must be between 10 and 50 characters')
        .escape(),
];

exports.validatePet = [
    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty')
        .isLength({ min: 2 })
        .withMessage('Name must be atleast 2 characters long')
        .escape(),
    this.validateDescription,
    body('imageURL')
        .matches(IMAGE_URL_PATTERN)
        .withMessage('Please provide a valid image link'),
];

exports.validateUser = [
    body('username')
        .notEmpty()
        .withMessage('Username cannot be empty')
        .isLength({ min: 4 })
        .withMessage('Username must be atleast 4 characters long')
        .matches(USERNAME_PATTERN)
        .withMessage('Please provide a valid username'),
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .matches(EMAIL_PATTERN)
        .withMessage('Please provide a valid email'),
];
