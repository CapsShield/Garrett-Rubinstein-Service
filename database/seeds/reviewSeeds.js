const faker = require('faker');
const usersGames = require('./usersGamesSeeds.js');
const seeds = [];

for (var i = 0; i < usersGames.length; i++) {
  seeds.push({
    languageId: faker.random.number({
      min: 0,
      max: 100
    }) < 90 ? 1 : 2,
    gameId: usersGames[i].gameId,
    userId: usersGames[i].userId,
    helpfulVotes: faker.random.number(1000),
    unhelpfulVotes: faker.random.number(1000),
    funnyVotes: faker.random.number(1000),
    hoursWhenReviewed: faker.random.number({
      min: 0,
      max: usersGames[i].hoursPlayed,
      precision: 0.1
    }),
    createdAt: faker.date.past(),
    reviewText: faker.lorem.paragraphs(faker.random.number(5)),
    positive: faker.random.boolean()
  });
}

module.exports = seeds;