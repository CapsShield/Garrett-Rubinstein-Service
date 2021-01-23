const Sequelize = require('sequelize');
const db = require('../index.js');
const Game = require('./games.model.js');
const User = require('./users.model.js');

const UsersGames = db.define('usersgame', {
}, {
  timestamps: false
});

module.exports = UsersGames;