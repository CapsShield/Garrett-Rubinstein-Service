const faker = require('faker');
const usersGames = require('./usersGamesSeeds.js');
const seeds = [];

for (var i = 0; i < usersGames.length; i++) {
  var positiveChance = faker.random.number({
    min: 20,
    max: 80
  });
  var hoursPlayed = faker.random.number({
    min: 0.1,
    max: 500,
    precision: 0.1
  });
  seeds.push({
    languageId: faker.random.number(100) < 90 ? 1 : 2,
    gameId: usersGames[i].gameId,
    userId: usersGames[i].userId,
    helpfulVotes: faker.random.number(1000),
    unhelpfulVotes: faker.random.number(1000),
    funnyVotes: faker.random.number(1000),
    hoursPlayed: hoursPlayed,
    hoursWhenReviewed: faker.random.number({
      min: 0.1,
      max: hoursPlayed,
      precision: 0.1
    }),
    createdAt: faker.date.past(),
    reviewText: faker.lorem.paragraphs(faker.random.number({
      min: 1,
      max: 10
    }), '\n\r\n'),
    positive: faker.random.number(100) < positiveChance ? true : false,
    purchasedOnVapor: faker.random.number(100) < 90 ? true : false
  });
}

module.exports = seeds;