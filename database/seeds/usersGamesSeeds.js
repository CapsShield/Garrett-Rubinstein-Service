const faker = require('faker');
const games = require('./gameSeeds.js');
const users = require('./userSeeds.js');
const seeds = [];

for (var i = 0; i < users.length; i++) {
  var reviewedGames = faker.helpers.shuffle(games).slice(0, users[i].reviewsWritten);
  for (var j = 0; j < reviewedGames.length; j++) {
    seeds.push({
      userId: users[i].id,
      gameId: reviewedGames[j].id
    });
  }
}

module.exports = seeds;