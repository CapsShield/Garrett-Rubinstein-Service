const { Op } = require('sequelize');

const parseOptions = (queryParams) => {
  const reviewFilters = {};
  if (queryParams.reviewType === 'positive') {
    reviewFilters.positive = true;
  } else if (queryParams.reviewType === 'negative') {
    reviewFilters.positive = false;
  }
  if (queryParams.purchaseType === 'vapor') {
    reviewFilters.purchasedOnVapor = true;
  } else if (queryParams.purchaseType === 'other') {
    reviewFilters.purchasedOnVapor = false;
  }
  if (queryParams.language === 'user') {
    reviewFilters.languageId = '1';
  }
  if (queryParams.playtime === 'over-1-hr') {
    reviewFilters.hoursWhenReviewed = {[Op.gte]: 1};
  } else if (queryParams.playtime === 'over-10-hrs') {
    reviewFilters.hoursWhenReviewed = {[Op.gte]: 10};
  } else if (queryParams.playtime === 'over-100-hrs') {
    reviewFilters.hoursWhenReviewed = {[Op.gte]: 100};
  }
  if (queryParams.sort === 'recent') {
    var sort = ['createdAt', 'DESC'];
  } else if (queryParams.sort === 'helpful') {
    var sort = ['helpfulVotes', 'DESC'];
  } else if (queryParams.sort === 'funny') {
    var sort = ['funnyVotes', 'DESC'];
  }
  return {
    filters: reviewFilters,
    sort: sort
  };

};

module.exports = parseOptions;