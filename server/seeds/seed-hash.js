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

    const pUsers = []
    const bUsers = []
    for(let i=0;i<pUserData.length;i++){
      let usr=await User.create(pUserData[i])
      pUsers.push(usr)
    }
    for(let i=0;i<bUserData.length;i++){
      let usr=await User.create(bUserData[i])
      bUsers.push(usr);
    }


    const parents = await Parent.insertMany(parentData);
    const babysitters = await Babysitter.insertMany(babysitterData);
    let i=0;
    for (newBabysitter of babysitters) {
      const tempUser = bUsers[i];
      newBabysitter.user = tempUser._id;
      await newBabysitter.save();
      i++;
    }

    i=0;
    for (newParent of parents) {
      const tempUser = pUsers[i];
      newParent.user = tempUser._id;
      await newParent.save();
      i++;
    }
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('CubCareDB seeded!');
  process.exit(0);
});