const mongoose = require('mongoose');
const User = require('./User');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        requied: true,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: User,
    },
    peopleLiked: [
        {
            type: String,
            required: true,
        },
    ],
});

module.exports = mongoose.model('Pet', petSchema);
