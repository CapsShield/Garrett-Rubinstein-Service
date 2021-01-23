const { Op } = require('sequelize');

const parseFilters = (filters) => {
  const reviewFilters = {};
  if (filters.reviewType === 'positive') {
    reviewFilters.positive = true;
  } else if (filters.reviewType === 'negative') {
    reviewFilters.positive = false;
  }
  if (filters.purchaseType === 'vapor') {
    reviewFilters.purchasedOnVapor = true;
  } else if (filters.purchaseType === 'other') {
    reviewFilters.purchasedOnVapor = false;
  }
  if (filters.language === 'user') {
    reviewFilters.languageId = '1';
  }
  if (filters.playtime === 'over-1-hr') {
    reviewFilters.hoursWhenReviewed = {[Op.gte]: 1};
  } else if (filters.playtime === 'over-10-hrs') {
    reviewFilters.hoursWhenReviewed = {[Op.gte]: 10};
  } else if (filters.playtime === 'over-100-hrs') {
    reviewFilters.hoursWhenReviewed = {[Op.gte]: 100};
  }
  return reviewFilters;

};

module.exports = parseFilters;