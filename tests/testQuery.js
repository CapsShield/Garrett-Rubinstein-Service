const { expect } = require('chai');
const {getGameRecentReviews} = require('../database/queries.js');

module.exports = (testCB, gameId) => {
  getGameRecentReviews(1, 0, (err, reviews) => {
    if (err) {
      return console.log(err);
    } else {
      testCB();
      expect(JSON.parse(reviews).rows.length).to.be.below(11, `Too many results per page for game ${gameId}`);
    }
  });
};