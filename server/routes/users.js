const express = require('express');  
const router = express.Router();
const controller = require('../controllers/usersController'); 

router.get('/', controller.getAll); 
// router.post('/', studentsController.createStudent);
// router.get('/:id', studentsController.getStudent);
// router.put('/:id', studentsController.updateStudent);
// router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
