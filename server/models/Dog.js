const { Schema, model  } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const dogSchema = new Schema({

    //_id: {
        //type: String,
        //require: true,
    //},

    name: {
        type: String,
        required: true,
        trim: true,
    },
    breeds: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: String,
        required: true,
    },

    photos: {
        type: String,
    },

    gender: {
        type: String,
    }

    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    //     get: (timestamp) => dateFormat(timestamp),
    //   },
});

const Dog = model('Dog', dogSchema);


module.exports = Dog;
