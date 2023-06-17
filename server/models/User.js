// This is a rough idea of what we need. Will need to be altered possibly.

const { Schema, model } = require('mongoose');

// Does this bcrypt stuff go in this file? If so, uncomment it. Otherwise, move it to the correct file.
// const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        userType: {
            type: String,
            enum: ['Babysitter', 'Parent']
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



// Does this stuff go in this file? If so, uncomment it. Otherwise, move it to the correct file. It may not be needed.

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }

//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(this.password, salt);
//         this.password = hashedPassword;
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// userSchema.methods.comparePassword = async function (candidatePassword) {
//     try {
//         return await bcrypt.compare(candidatePassword, this.password);
//     } catch (error) {
//         throw new Error(error);
//     }
// };

const User = model('User', userSchema);

module.exports = User;
