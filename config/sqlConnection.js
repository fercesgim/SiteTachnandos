const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('userTable', 'user', 'user', {
  dialect: 'sqlite',
  host: '.dev.sqlite'
})

module.exports = sequelize;
