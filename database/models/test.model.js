const Sequelize = require('sequelize');
const db = require('../index.js');

const Test = db.define('test', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

module.exports = Test;