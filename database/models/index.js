const Sequelize = require('sequelize');
const db = require('../index.js');

const Test = require('./test.model.js');

module.exports = {
  db,
  Test
};