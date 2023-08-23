const User = require('../models/userModel');

const getAll = async (req, res) => {
    try {
      const results = await User.findAll();
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };

module.exports = {
    getAll
  };