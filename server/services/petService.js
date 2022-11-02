const Pet = require('../models/Pet');

const getAll = () => {
    return Pet.find();
};

const getByCategory = (category = '') => {
    return Pet.find({ category: category });
};

const getById = (id) => {
    return Pet.findById(id);
};

const create = (data) => {
    
};

module.exports = {
    getAll,
    getByCategory,
    getById,
};
