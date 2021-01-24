const db = require('./index.js');
const { User, Game, Language, Review, UsersGames } = require('./models/index.js');
const moment = require('moment');
const { Op } = require('sequelize');

const getGameReviews = (gameId, pageNum = 0, filters, sort, cb) => {
  const whereFilters = Object.assign({ gameId: gameId }, filters);

  Review.findAndCountAll({
    where: whereFilters,
    include: [Language, User],
    order: [
      sort
    ],
    limit: 10,
    offset: pageNum * 10
  })
    .then(reviews => cb(null, JSON.stringify(reviews, null, 2)))
    .catch((err) => cb(err));
};

const getCounts = (gameId, recentOnly, filters, cb) => {
  var total = 0;
  var where = Object.assign({ gameId: gameId }, filters);
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
    .then(() => {
      return filters.positive === false ? 0 : Review.count({
        where: wherePos
      });
    })
    .then((posCount) => cb(null, [posCount, total]))
    .catch((err) => cb(err));
};

const getFilterTotal = (gameId, filter) => {
  var where = Object.assign({ gameId: gameId }, filter);
  return Review.count({ where: where });
};


module.exports = {
  getGameReviews,
  getCounts,
  getFilterTotal
};