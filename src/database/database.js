const Sequelize = require("sequelize");

const sequelize = new Sequelize("disney", "postgres", "40070859", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
