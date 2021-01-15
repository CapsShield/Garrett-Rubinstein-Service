const db = require('./index.js');
const {User, Game, Language, Review, UsersGames} = require('./models/index.js');

const userSeeds = [
  {
    username: 'Garrub',
    avatarUrl: 'http://placecorgi.com/32/32',
    productsOwned: 42,
    reviewsWritten: 1
  }
];
const gameSeeds = [
  {
    title: 'Antichamber'
  }
];
const langSeeds = [
  {
    lang: 'en'
  }
];
const reviewSeeds = [
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
];
const usersGamesSeeds = [
  {
    hoursPlayed: 44,
    purchasedOnSteam: true,
    gameId: 1,
    userId: 1
  }
];

const seed = () => {
  return User.bulkCreate(userSeeds)
    .then(() => Game.bulkCreate(gameSeeds))
    .then(() => Language.bulkCreate(langSeeds))
    .then(() => Review.bulkCreate(reviewSeeds))
    .then(() => UsersGames.bulkCreate(usersGamesSeeds))
    .catch((err) => console.log(`ERROR IN SEEDING: \n ${err}`));
};

db.sync({force: true})
  .then(() => seed())
  .then(() => {
    process.exit();
  })
  .catch((err) => console.log(`ERROR IN SYNC: \n ${err}`));