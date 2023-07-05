const db = require('../config/connection');
const { User, Babysitter, Parent } = require('../models');

const bUserData = require('./b-users.json');
const pUserData = require('./p-users.json')
const parentData = require('./parents.json');
const babysitterData = require('./babysitters.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Parent.deleteMany({});
    await Babysitter.deleteMany({});

    const pUsers = await User.insertMany(pUserData);
    const bUsers = await User.insertMany(bUserData);

    const parents = await Parent.insertMany(parentData);
    const babysitters = await Babysitter.insertMany(babysitterData);

    for (newBabysitter of babysitters) {
      const tempUser = bUsers[Math.floor(Math.random() * bUsers.length)];
      newBabysitter.user = tempUser._id;
      await newBabysitter.save();
    }

    for (newParent of parents) {
      const tempUser = pUsers[Math.floor(Math.random() * pUsers.length)];
      newParent.user = tempUser._id;
      await newParent.save();
    }
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('CubCareDB seeded!');
  process.exit(0);
});