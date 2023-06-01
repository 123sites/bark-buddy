const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    breed: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    //     get: (timestamp) => dateFormat(timestamp),
    //   },
});

const Dog = model('Dog', dogSchema);

module.exports = Dog;
