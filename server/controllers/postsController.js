const Model = require('../models/postModel'); 
// Get all students
const getAll = async (req, res) => {
    try {
      const all_results = await Model.findAll();  
      res.json(all_results);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Create a new student
  const create = async (req, res) => {
    const { title, code, description, major, pre_req } = req.body;
    try {
      await Model.create({ title, code, description, major, pre_req });
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  const get = async (req, res) => {
    const { id } = req.params;
    try {
      await Model.find({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Update a student
  const update = async (req, res) => {
    const { id } = req.params;
    const { title, code, description, major, pre_req } = req.body;
    try {
      await Model.update({ title, code, description, major, pre_req }, { where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Delete a student
  const trash = async (req, res) => {
    const { id } = req.params;
    try {
      await Model.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  module.exports = {
    getAll,
    create,
    get,
    update,
    trash
  }