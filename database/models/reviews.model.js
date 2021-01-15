const Sequelize = require('sequelize');
const db = require('../index.js');

const Review = db.define('review', {
  reviewText: Sequelize.TEXT,
  helpfulVotes: Sequelize.INTEGER,
  unhelpfulVotes: Sequelize.INTEGER,
  funnyVotes: Sequelize.INTEGER,
  hoursWhenReviewed: Sequelize.DECIMAL(10, 1),
  createdAt: Sequelize.DATE
}, {
  timestamps: false
});

module.exports = Review;