const Sequelize = require('sequelize');
const db = require('../index.js');

const Language = db.define('language', {
  lang: Sequelize.STRING
}, {
  timestamps: false
});

module.exports = Language;