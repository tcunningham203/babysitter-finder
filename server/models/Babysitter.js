const { Schema, model } = require('mongoose');

const babysitterSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    zone: {
        type: String,
        required: true
    },
    jobExp: {
        type: String,
        required: false
    },
    otherExp: {
        type: String,
        required: false
    },
    shortNotice: {
        type: Boolean,
        required: false
    },
    transportation: {
        type: String,
        required: false
    },
    activities: {
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
    rates: {
        type: String,
        required: false
    },
    profilePic: {
        type: String,
        required: false
    },
    interestedParents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Parent'
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

const Babysitter = model('Babysitter', babysitterSchema);

module.exports = Babysitter;