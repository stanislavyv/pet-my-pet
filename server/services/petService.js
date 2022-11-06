const Pet = require('../models/Pet');

const PAGE_SIZE = 8;

exports.getAll = async (inputQuery) => {
    const { ownerid, category, page } = inputQuery;
    let query = {};

    if (ownerid) {
        query = { ...query, 'creator.id': ownerid };
    }

    if (category) {
        query = { ...query, category };
    }

    const offset = page ? (page - 1) * PAGE_SIZE : 0;

    const count = await Pet.countDocuments(query);
    const result = await Pet.find(query).skip(offset).limit(PAGE_SIZE).lean();

    return { count, result };
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

exports.deletePet = async (id) => {
    const pet = await Pet.findByIdAndDelete(id);
    return pet;
};

exports.doesPetExist = async (name) => {
    return Boolean(await Pet.findOne({ name }));
};
