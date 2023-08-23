const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db'); 

class Department extends Model {

  // add your custom methods here
   
}

Department.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
    // allowNull defaults to true
  },
  est_year: {
    type: DataTypes.TEXT
    // allowNull defaults to true
  },
  departmentHead: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Department' // We need to choose the model name
});

module.exports = Department;

