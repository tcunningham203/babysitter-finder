const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://stayfitwithrama:test1234@cluster0.umvato3.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
