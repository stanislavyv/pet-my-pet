const mongoose = require('mongoose');

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
        id: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    peopleLiked: [
        {
            type: String,
            required: true,
        },
    ],
});

module.exports = mongoose.model('Pet', petSchema);
