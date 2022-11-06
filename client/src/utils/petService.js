import * as requester from './requester';

export const getAllPets = function () {
    const query = window.location.search;

    try {
        return requester.get(query);
    } catch (e) {
        console.log(e.message);
    }
};

export const getPetById = async function (id = '') {
    try {
        const pet = await requester.get(`/${id}`);
        return pet;
    } catch (e) {
        console.log(e.message);
    }
};

export const createPet = function (petObject) {
    try {
        const res = requester.post(petObject);
        return res;
    } catch (e) {
        console.log(`Couldn't add pet - ${e.message}`);
    }
};

export const editPet = function (id, newDescription) {
    try {
        const res = requester.patch(`/${id}/edit`, {
            description: newDescription,
        });
        return res;
    } catch (e) {
        console.log(`Couldn't edit pet - ${e.message}`);
    }
};

export const likePet = async function (id) {
    try {
        return requester.patch(`${id}/like`);
    } catch (e) {
        console.log(`Couldn't like pet - ${e.message}`);
    }
};

export const deletePet = (id) => {
    try {
        const res = requester.remove(id);
        return res;
    } catch (e) {
        console.log(e);
    }
};
