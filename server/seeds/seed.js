// Placeholder file from MERN mini project. Make neccessary adjustments then delete this comment. (JSON FILES GO IN THIS FOLDER)

const db = require('../config/connection');
const { Tech } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
