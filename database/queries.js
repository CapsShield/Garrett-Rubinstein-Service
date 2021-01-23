const db = require('./index.js');
const { User, Game, Language, Review, UsersGames } = require('./models/index.js');
const moment = require('moment');
const { Op } = require('sequelize');

const getGameRecentReviews = (gameId, pageNum = 0, filters, cb) => {
  const whereFilters = Object.assign({ gameId: gameId }, filters);

  Review.findAndCountAll({
    where: whereFilters,
    include: [Language, User],
    order: [
      ['createdAt', 'DESC']
    ],
    limit: 10,
    offset: pageNum * 10
  })
    .then(reviews => cb(null, JSON.stringify(reviews, null, 2)))
    .catch((err) => cb(err));
};

const getCounts = (gameId, recentOnly, cb) => {
  var total = 0;
  var where = { gameId: gameId };
  if (recentOnly) {
    where.createdAt = {
      [Op.gte]: moment().subtract(30, 'days').toDate()
    };
  }
  const wherePos = Object.assign({ positive: true }, where);
  Review.count({
    where: where
  })
    .then(count => {
      total = count;
    })
    .then(() => Review.count({
      where: wherePos
    }))
    .then((posCount) => cb(null, [posCount, total]))
    .catch((err) => cb(err));
};

module.exports = {
  getGameRecentReviews,
  getCounts
};