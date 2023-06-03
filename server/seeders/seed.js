const db = require('../config/connection');
const { User, Dog} = require('../models');
const userSeeds = require('./userSeeds.json');
const petSeeds = require('./petSeeds.json');

db.once('open', async () => {
  try {
    // await Dog.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds); 
    await Dog.create(dogSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('All done!');
  process.exit(0);
});
