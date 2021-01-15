const Sequelize = require('sequelize');
const db = require('../index.js');

const Game = db.define('game', {
  title: Sequelize.STRING
},
{
  timestamps: false
});

module.exports = Game;