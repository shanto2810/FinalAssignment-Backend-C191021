const mongoose = require('mongoose');

const uri = 'mongodb+srv://naimulislam:nis12345678@budget-tracker.5ostfdd.mongodb.net/'; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

module.exports = db;




