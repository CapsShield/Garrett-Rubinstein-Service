const game = require('./seeds/gameSeeds.js');
const lang = require('./seeds/langSeeds.js');
const user = require('./seeds/userSeeds.js');
const usersGames = require('./seeds/usersGamesSeeds.js');
const review = require('./seeds/reviewSeeds.js');
const seed = require('./seed.js');

seed({ game, lang, review, user, usersGames }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('ALL SEEDED!');
  }
});

