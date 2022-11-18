const User = require('../models/User');

exports.createUser = ({ id, username, email }) => {
    const user = new User({ _id: id, username, email });
    return user.save();
};

exports.getById = (uid) => {
    return User.findOne({ _id: uid });
};

exports.getByUsername = (username) => {
    return User.findOne({ username });
};

exports.doesUserExist = async (username) => {
    return Boolean(await User.findOne({ username }));
};
