const Sequelize = require('sequelize');
const db = require('../index.js');
const Game = require('./games.model.js');
const User = require('./users.model.js');

const UsersGames = db.define('usersgame', {
  hoursPlayed: Sequelize.DECIMAL(10, 1),
  purchasedOnSteam: Sequelize.BOOLEAN,
  GameId: {
    type: Sequelize.INTEGER,
    references: {
      model: Game,
      key: 'id'
    }
  },
  UserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  timestamps: false
});

module.exports = UsersGames;