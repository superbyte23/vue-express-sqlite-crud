const { Sequelize } = require('sequelize'); 
// const Department = require('../models/deparmentModel');

const password = "";
const user = "root";
const db = "test";

const sequelize = new Sequelize(db,user,password,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false,
  }
);

sequelize.sync({ alter: true });

module.exports = sequelize;
