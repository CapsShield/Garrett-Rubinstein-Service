const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');

module.exports = {
  init: (cb) => mysql.createConnection({
    user: 'student',
    password: 'student'
  }).then((connection) => {
    connection.query('CREATE DATABASE IF NOT EXISTS FEC;').then(() => {
      const sequelize = new Sequelize('FEC', 'student', 'student', {
        host: 'localhost',
        dialect: 'mysql'
      });
      cb(sequelize);
    });
  })
};





