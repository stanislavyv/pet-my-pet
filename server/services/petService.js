const Pet = require('../models/Pet');

exports.getAll = () => {
    return Pet.find();
};

exports.getByCategory = (category = '') => {
    return Pet.find({ category });
};

exports.getById = (id) => {
    return Pet.findById(id);
};

exports.createPet = (data) => {
    const pet = new Pet(data);
    return pet.save();
};

exports.doesPetExist = async (name) => {
    return Boolean(await Pet.findOne({ name }));
};
