const { DataTypes } = require('sequelize'); 

const sequelize = require('../db/db'); 

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  major: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'departments',
      key: 'id'
    }
  }
});

// sequelize.sync();

module.exports = Course;
  