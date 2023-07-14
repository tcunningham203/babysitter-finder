const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://stayfitwithrama:test1234@cluster0.umvato3.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
