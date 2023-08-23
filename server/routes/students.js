const express = require('express');  
const router = express.Router();
const studentsController = require('../controllers/studentsController'); 

router.get('/', studentsController.getAllStudents);
router.get('/session', (req, res) => { 
    res.send(req.session);

});
router.post('/', studentsController.createStudent);
router.get('/:id', studentsController.getStudent);
router.put('/:id', studentsController.updateStudent);
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
