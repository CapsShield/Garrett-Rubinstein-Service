const { init } = require('./index.js');

init((sequelize) => {
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      return sequelize.close();
    })
    .catch((error) => console.error('Unable to connect to the database:', error));
});