const faker = require('faker');
const seeds = [];

for (var i = 0; i < 400; i++) {
  var owned = faker.random.number({
    min: 25,
    max: 101 //total number of seeded games
  });
  seeds.push({
    id: i + 1,
    username: faker.internet.userName(),
    avatarUrl: faker.image.image(32, 32, true),
    productsOwned: owned,
    reviewsWritten: faker.random.number({
      min: 1,
      max: owned //max 1 review per user per game
    })
  });
}

module.exports = seeds;