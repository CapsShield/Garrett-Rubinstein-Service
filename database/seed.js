const db = require('./index.js');
const {Test: Tests} = require('./models/index.js');


const testSeeds = [
  {
    name: 'A'
  },
  {
    name: 'B'
  },
  {
    name: 'C'
  }
];

const seed = () => {
  return Tests.bulkCreate(testSeeds);
};

db.sync()
  .then(() => seed())
  .then(() => {
    process.exit();
  });