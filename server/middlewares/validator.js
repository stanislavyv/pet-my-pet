const { body } = require('express-validator');

const IMAGE_URL_PATTERN = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

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
