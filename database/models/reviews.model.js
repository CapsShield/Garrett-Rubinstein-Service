const Sequelize = require('sequelize');
const db = require('../index.js');

const Review = db.define('review', {
  reviewText: Sequelize.TEXT,
  helpfulVotes: Sequelize.INTEGER,
  unhelpfulVotes: Sequelize.INTEGER,
  funnyVotes: Sequelize.INTEGER,
  hoursPlayed: Sequelize.DECIMAL(10, 1),
  hoursWhenReviewed: Sequelize.DECIMAL(10, 1),
  createdAt: Sequelize.DATE,
  positive: Sequelize.BOOLEAN,
  purchasedOnVapor: Sequelize.BOOLEAN
}, {
  timestamps: false
});

module.exports = Review;