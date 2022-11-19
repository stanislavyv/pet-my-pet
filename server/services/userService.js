const User = require('../models/User');
const admin = require('../config/firebase');
const mongoose = require('mongoose');

exports.createUser = async ({ username, email, password }) => {
    const user = new User({ username, email });
    const uid = user._id.toHexString();

    try {
        await admin.auth().createUser({
            uid,
            email,
            password,
        });
    } catch (e) {
        throw { message: e.errorInfo.message };
    }

    const token = admin.auth().createCustomToken(uid);

    user.save();
    return token;
};

exports.getById = (uid) => {
    return User.findById(uid);
};

exports.getByUsername = (username) => {
    return User.findOne({ username });
};

exports.doesUserExist = async (username) => {
    return Boolean(await User.findOne({ username }));
};
