const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('user', {
  username: Sequelize.STRING,
  avatarUrl: Sequelize.STRING,
  productsOwned: Sequelize.INTEGER,
  reviewsWritten: Sequelize.INTEGER
}, {
  timestamps: false
});

module.exports = User;