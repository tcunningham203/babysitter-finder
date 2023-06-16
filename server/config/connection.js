// // Placeholder file from MERN mini project. This is the file that connects to mongoose. This file is meant to create a function that gets exported to the server.js file. (You would also put the .env file in this same folder?) This file is not nessessarily complete. Make changes and delete this comment.


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techmatchup');

module.exports = mongoose.connection;
