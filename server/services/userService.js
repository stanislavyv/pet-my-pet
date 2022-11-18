const User = require('../models/User');

exports.createUser = (data) => {
    const user = new User(data);
    return user.save();
};

exports.getById = (uid) => {
    return User.findById(uid);
};

exports.getByUsername = (username) => {
    return User.find({ username });
};

exports.doesUserExist = async (username) => {
    return Boolean(await User.findOne({ username }));
};
