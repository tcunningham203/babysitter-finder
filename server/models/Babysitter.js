const { Schema, model } = require('mongoose');

const babysitterSchema = new Schema({
    // entire schema
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // location
    location: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: false
    },
    otherExperience: {
        type: String,
        required: false
    },
    shortNoticeAvailability: {
        type: Boolean,
        required: false
    },
    transportationOptions: {
        type: String,
        required: false
    },
    activities: {
        type: String,
        required: false
    },
    behavioralIssueHandling: {
        type: String,
        required: false
    },
    allowPets: {
        type: Boolean,
        required: true
    },
    enforceScreenTime: {
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
