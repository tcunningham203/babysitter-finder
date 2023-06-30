const { Schema, model } = require('mongoose');

const parentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // location
    city: {
        type: String,
        required: true
    },
    childrenHowMany: {
        type: String,
        required: false
    },
    childrenAge: {
        type: String,
        required: false
    },
    childrenActivities: {
        type: String,
        required: false
    },
    childrenAllergies: {
        type: String,
        required: false
    },
    hasPets: {
        type: Boolean,
        required: true
    },
    hasScreenTimeRules: {
        type: Boolean,
        required: true
    },
    allowsSmokerBabysitter: {
        type: Boolean,
        required: true
    },
    additionalConcerns: {
        type: String,
        required: false
    },
    // profilePicture: {
    //     type: String,
    //     required: false
    // },
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