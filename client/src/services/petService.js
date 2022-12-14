import * as requester from '../lib/requester';

const collection = '/pets';

export const getAllPets = function () {
    const query = window.location.search;

    try {
        return requester.get(`${collection}${query}`);
    } catch (e) {
        console.log(e.message);
    }
};

export const getPetById = async function (id = '') {
    try {
        const pet = await requester.get(`${collection}/${id}`);
        return pet;
    } catch (e) {
        console.log(e.message);
    }
};

export const createPet = async function (petObject) {
    const res = await requester.post(petObject, collection);

    if (res.message) {
        throw new Error(res.message);
    }

    return res;
};

export const editPet = async function (id, newDescription) {
    const res = await requester.patch(`${collection}/${id}/edit`, {
        description: newDescription,
    });

    if (res.message) {
        throw new Error(res.message);
    }

    return res;
};

export const likePet = async function (id) {
    try {
        return requester.patch(`${collection}/${id}/like`);
    } catch (e) {
        console.log(`Couldn't like pet - ${e.message}`);
    }
};

export const deletePet = (id) => {
    return requester.remove(`${collection}/${id}`);
};
