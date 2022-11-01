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
    imageUrl: {
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
        type: String,
        required: true,
    },
    peopleLiked: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    ],
});

module.exports = mongoose.model('Pet', petSchema);
