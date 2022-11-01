const Pet = require('../models/Pet');
const mongoose = require('mongoose');

const getAll = () => {
    return Pet.find();
};

const getById = (id) => {
    return Pet.findById(id);
};

module.exports = {
    getAll,
    getById,
};
