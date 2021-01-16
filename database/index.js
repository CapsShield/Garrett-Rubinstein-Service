const Sequelize = require('sequelize');

module.exports = new Sequelize('FEC', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});





