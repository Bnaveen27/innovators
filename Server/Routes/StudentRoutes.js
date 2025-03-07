
const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/StudentController');

// Routes
router.post('/Pages/StudentRegister/StudentsRegister', studentController.registerStudent);
router.get('/Student', studentController.getAllStudents);
router.get('/Student/:rollNo', studentController.getStudentByRollNo); // Route to check if student exists
router.put('/Student/:id', studentController.updateStudent);
router.delete('/Student/:id', studentController.deleteStudent);

module.exports = router;