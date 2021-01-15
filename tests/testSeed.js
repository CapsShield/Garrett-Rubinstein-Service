const seedAll = require('../database/seed.js');
const db = require('../database/index.js');

const seeds = {
  user: [
    {
      username: 'Garrub',
      avatarUrl: 'http://placecorgi.com/32/32',
      productsOwned: 42,
      reviewsWritten: 1
    }
  ],
  game: [
    {
      title: 'Antichamber'
    }
  ],
  lang: [
    {
      lang: 'en'
    }
  ],
  review: [
    {
      reviewText: 'OMG what a cool puzzle game! It really messes with your brain! 10/10, would reccommend!',
      helpfulVotes: 200,
      unhelpfulVotes: 15,
      funnyVotes: 3,
      hoursWhenReviewed: 24.5,
      createdAt: new Date(2013, 3, 15, 9, 38, 16),
      languageId: 1,
      gameId: 1,
      userId: 1
    }
  ],
  usersGames: [
    {
      hoursPlayed: 44,
      purchasedOnSteam: true,
      gameId: 1,
      userId: 1
    }
  ]
};

seedAll(seeds, (err) => {
  if (err) {
    console.error(err);
  } else {
    //tests go here!
    console.log('SUCCESS!');
  }
});