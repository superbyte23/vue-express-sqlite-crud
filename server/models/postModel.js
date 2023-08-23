const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db'); 

class Post extends Model {

  // add your custom methods here
  
  static customMethod(value) {
    // This is the custom method
    return value * 2;
  }
}

Post.init({
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT
    // allowNull defaults to true
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Post' // We need to choose the model name
});


module.exports = Post;
