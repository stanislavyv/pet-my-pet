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

exports.likeUnlikePet = async (userId, petId) => {
    const pet = await Pet.findById(petId);

    if (pet.peopleLiked.includes(userId)) {
        pet.likes -= 1;
        const index = pet.peopleLiked.indexOf(userId);
        pet.peopleLiked.splice(index, 1);
    } else {
        pet.likes += 1;
        pet.peopleLiked.push(userId);
    }

    pet.save();
    return { likes: pet.likes, peopleLiked: pet.peopleLiked };
};

exports.editPet = (id, data) => {
    return Pet.findByIdAndUpdate(id, data);
};

exports.doesPetExist = async (name) => {
    return Boolean(await Pet.findOne({ name }));
};
