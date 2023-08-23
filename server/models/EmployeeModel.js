const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db'); 

class Employee extends Model {

  // add your custom methods here
   
}

Employee.init({
  // Model attributes are defined here
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middle_name: {
    type: DataTypes.STRING 
  },
  suffix: {
    type: DataTypes.STRING  
  }, 
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false 
  },
  sex: {
    type: DataTypes.STRING  
  },
  position : {
    type: DataTypes.STRING  
  },
  title : {
    type: DataTypes.STRING  
  },
  salary : {
    type: DataTypes.DOUBLE  
  },
  status : {
    type: DataTypes.STRING  
  },
  date_hired : {
    type: DataTypes.DATEONLY  
  },
  department_id : {
    type: DataTypes.INTEGER,
    references: {
      model: 'departments',
      key: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Employee' // We need to choose the model name
});

module.exports = Employee;