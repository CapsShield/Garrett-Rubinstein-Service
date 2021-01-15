const seedAll = require('../database/seed.js');
const { expect } = require('chai');

const Game = require('../database/models/games.model.js');
const User = require('../database/models/users.model.js');
const Language = require('../database/models/languages.model.js');
const UsersGames = require('../database/models/usersgames.model.js');
const Review = require('../database/models/reviews.model.js');

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

module.exports = (testCB) =>
  seedAll(seeds, (err) => {
    if (err) {
      console.error(err);
    } else {
      // TESTS GO HERE
      if (testCB) {
        testCB();
      }
      return Game.findAll()
        .then((games) => {
          expect(games.length).to.equal(1);
        })
        .then(() => Language.findAll())
        .then((langs) => expect(langs.length).to.equal(1))
        .then(() => Review.findAll())
        .then((reviews) => expect(reviews.length).to.equal(1))
        .then(() => User.findAll())
        .then((users) => expect(users.length).to.equal(1))
        .then(() => UsersGames.findAll())
        .then((usersGames) => expect(usersGames.length).to.equal(1))
        .then(() => console.log('SUCCESS!'))
        .catch((err) => console.log(err));
    }
  });