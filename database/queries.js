const db = require('./index.js');
const { User, Game, Language, Review, UsersGames } = require('./models/index.js');

const getGameRecentReviews = (gameId, pageNum = 0, cb) => {
  Review.findAndCountAll({
    where: {
      gameId: gameId
    },
    include: [Language, {
      model: User, include: {
        model: Game,
        where: {id: gameId}
      }
    }],
    order: [
      ['createdAt', 'DESC']
    ],
    limit: 10,
    offset: pageNum * 10
  })
    .then(reviews => cb(null, JSON.stringify(reviews, null, 2)))
    .catch((err) => cb(err));
};

module.exports = {
  getGameRecentReviews
};