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
  return reviewFilters;

};

module.exports = parseFilters;