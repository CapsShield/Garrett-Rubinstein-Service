const Sequelize = require('sequelize');

module.exports = new Sequelize('FEC', process.env.MYSQL_USER, process.env.MYSQL_PWD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});





