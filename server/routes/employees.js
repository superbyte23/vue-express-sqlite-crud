const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeeController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.put('/:id', controller.update);
router.delete('/:id', controller.trash);

module.exports = router;
