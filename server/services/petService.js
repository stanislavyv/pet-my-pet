const Pet = require('../models/Pet');

exports.getAll = (inputQuery) => {
    const { ownerid, category } = inputQuery;
    let query = {};

    if (ownerid) {
        query = { ...query, 'creator.id': ownerid };
    }

    if (category) {
        query = { ...query, category };
    }

    return Pet.find(query);
};

exports.getById = (id) => {
    return Pet.findById(id);
};

exports.createPet = (data) => {
    const pet = new Pet(data);
    return pet.save();
};

exports.editPet = (id, data) => {
    return Pet.findByIdAndUpdate(id, data);
};

exports.doesPetExist = async (name) => {
    return Boolean(await Pet.findOne({ name }));
};
