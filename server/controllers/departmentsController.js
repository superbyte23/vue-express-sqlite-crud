const Department = require('../models/departmentModel'); 

// Get all students
const getAll = async (req, res) => {
    try {
      const results = await Department.findAll();  
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Create a new student
  const create = async (req, res) => {
    const courseData = req.body; 
    try {
      await Department.create(courseData);
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  const get = async (req, res) => {
    const { id } = req.params;
    try {
      await Department.find({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Update a student
  const update = async (req, res) => {
    const { id } = req.params;
    const courseData = req.body; 
    try {
      await Department.update(courseData, { where: { id } });
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
      await Department.destroy({ where: { id } });
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
    trash,
  };