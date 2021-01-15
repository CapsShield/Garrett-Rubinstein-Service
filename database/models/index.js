const Sequelize = require('sequelize');
const db = require('../index.js');

const Game = require('./games.model.js');
const User = require('./users.model.js');
const Language = require('./languages.model.js');
const UsersGames = require('./usersgames.model.js');
const Review = require('./reviews.model.js');

Game.hasMany(Review);
Review.belongsTo(Game);

User.hasMany(Review);
Review.belongsTo(User);

Language.hasMany(Review);
Review.belongsTo(Language);

Game.belongsToMany(User, { through: UsersGames });
User.belongsToMany(Game, { through: UsersGames });

module.exports = {
  db,
  Game,
  User,
  Language,
  UsersGames,
  Review
};