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
  if (queryParams.playtime === 'range') {
    reviewFilters.hoursWhenReviewed = {};
    if (queryParams.rangeMin) {
      reviewFilters.hoursWhenReviewed[Op.gte] = queryParams.rangeMin;
    }
    if (queryParams.rangeMax) {
      reviewFilters.hoursWhenReviewed[Op.lte] = queryParams.rangeMax;
    }
  } else if (queryParams.playtime === 'over-1-hr') {
    reviewFilters.hoursWhenReviewed = {[Op.gte]: 1};
  } else if (queryParams.playtime === 'over-10-hrs') {
    reviewFilters.hoursWhenReviewed = {[Op.gte]: 10};
  }
  if (queryParams.sort === 'helpful') {
    var sort = ['helpfulVotes', 'DESC'];
  } else if (queryParams.sort === 'funny') {
    var sort = ['funnyVotes', 'DESC'];
  } else {
    var sort = ['createdAt', 'DESC'];
  }
  return {
    filters: reviewFilters,
    sort: sort
  };

};

module.exports = parseOptions;