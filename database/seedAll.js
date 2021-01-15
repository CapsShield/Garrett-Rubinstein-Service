const game = require('./seeds/gameSeeds.js');
const lang = require('./seeds/langSeeds.js');
const review = require('./reviewSeeds.js');
const user = require('./userSeeds.js');
const usersGames = require('./usersGamesSeeds.js');
const seed = require('./seed.js');

seed({ game, lang, review, user, usersGames }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('ALL SEEDED!');
  }
});
