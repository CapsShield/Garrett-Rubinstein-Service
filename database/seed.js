const db = require('./index.js');
const { User, Game, Language, Review, UsersGames } = require('./models/index.js');

const seed = (seeds) => {
  return User.bulkCreate(seeds.user)
    .then(() => Game.bulkCreate(seeds.game))
    .then(() => Language.bulkCreate(seeds.lang))
    .then(() => Review.bulkCreate(seeds.review))
    .then(() => UsersGames.bulkCreate(seeds.usersGames))
    .catch((err) => console.log(`ERROR IN SEEDING: \n ${err}`));
};

module.exports = (seeds, cb) => {
  return db.sync({ force: true })
    .then(() => seed(seeds))
    .then(() => cb(null))
    .then(() => {
      process.exit();
    })
    .catch((err) => cb(err));
};