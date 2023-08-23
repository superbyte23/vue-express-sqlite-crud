const Course = require('../models/courseModel');

// Get all students
const getAll = async (req, res) => {
    try {
      const courses = await Course.findAll(); 
      req.session.courses = courses;
      res.json(courses);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Create a new student
  const create = async (req, res) => {
    const courseData = req.body;
    try {
      await Course.create(courseData);
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  const get = async (req, res) => {
    const { id } = req.params;
    try {
      await Course.find({ where: { id } });
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
      await Course.update(courseData, { where: { id } });
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
      await Course.destroy({ where: { id } });
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