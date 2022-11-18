const User = require('../models/User');

exports.createUser = ({ id, username, email }) => {
    const user = new User({ _id: id, username, email });
    return user.save();
};

exports.getById = (uid) => {
    return User.find({ _id: uid });
};

exports.getByUsername = (username) => {
    return User.find({ username });
};

exports.doesUserExist = async (username) => {
    return Boolean(await User.findOne({ username }));
};
