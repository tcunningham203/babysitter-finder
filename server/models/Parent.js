const { Schema, model } = require('mongoose');

const parentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    zone: {
        type: String,
        required: true
    },
    howMany: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    },
    activities: {
        type: String,
        required: false
    },
    allergies: {
        type: String,
        required: false
    },
    pets: {
        type: Boolean,
        required: false
    },
    smoker: {
        type: Boolean,
        required: false
    },
    requests: {
        type: String,
        required: false
    },
    contact: {
        type: String,
        required: false
    },
    starredBabysitters: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Babysitter'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Parent = model('Parent', parentSchema);

module.exports = Parent;