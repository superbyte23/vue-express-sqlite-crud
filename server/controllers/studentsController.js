const Student = require('../models/studentModel');

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Create a new student
const createStudent = async (req, res) => {
  const { name, age } = req.body;
  try {
    await Student.create({ name, age });
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  try {
    await Student.find({ where: { id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Update a student
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  try {
    await Student.update({ name, age }, { where: { id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Delete a student
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    await Student.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
