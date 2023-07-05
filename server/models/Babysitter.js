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
    issueHandling: {
        type: String,
        required: false
    },
    pets: {
        type: Boolean,
        required: true
    },
    smoker: {
        type: Boolean,
        required: true
    },
    rates: {
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

const Babysitter = model('Babysitter', babysitterSchema);

module.exports = Babysitter;