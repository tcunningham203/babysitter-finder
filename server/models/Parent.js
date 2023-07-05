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
        required: true
    },
    screenTime: {
        type: Boolean,
        required: true
    },
    smoker: {
        type: Boolean,
        required: true
    },
    requests: {
        type: String,
        required: false
    },
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