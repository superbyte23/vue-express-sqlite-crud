const Employee = require('../models/employeeModel'); 

// Get all students
const getAll = async (req, res) => {
    try {
      const results = await Employee.findAll();  
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Create a new student
  const create = async (req, res) => {
    const insertData = req.body; 
    try {
      await Employee.create(insertData);
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  const get = async (req, res) => {
    const { id } = req.params;
    try {
      await Employee.find({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Update a student
  const update = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body; 
    try {
      await Employee.update(updateData, { where: { id } });
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
      await Employee.destroy({ where: { id } });
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