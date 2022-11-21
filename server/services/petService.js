const Pet = require('../models/Pet');
const mongoose = require('mongoose');

const PAGE_SIZE = 8;

const SORT_OPTIONS = {
    alphabetical: { name: 1 },
    'likes-asc': { likes: 1 },
    'likes-desc': { likes: -1 },
};

exports.getAll = async (inputQuery) => {
    const { ownerid, category, page, search, sort } = inputQuery;
    let query = {};

    if (ownerid) {
        query = { ...query, creator: decodeURIComponent(ownerid) };
    }

    if (category) {
        query = { ...query, category: decodeURIComponent(category) };
    }

    if (search) {
        query = {
            ...query,
            name: { $regex: decodeURIComponent(search), $options: 'i' },
        };
    }

    let sortObj = SORT_OPTIONS['alphabetical'];
    if (sort) {
        sortObj = SORT_OPTIONS[sort];
    }

    const offset = page ? (page - 1) * PAGE_SIZE : 0;

    const count = await Pet.countDocuments(query);
    const result = await Pet.find(query, null, { sort: sortObj })
        .skip(offset)
        .limit(PAGE_SIZE)
        .populate('creator');

    return { count, result };
};

exports.getById = (id) => {
    return Pet.findById(id).populate('creator');
};

exports.createPet = (data, uid) => {
    const creator = mongoose.Types.ObjectId(uid);
    data.creator = creator;
    data.likes = 0;
    data.peopleLiked = [];

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
