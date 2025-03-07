
const Student = require('../models/StudentDetails');

// Register a new student
exports.registerStudent = async (req, res) => {
  try {
    const { name, rollNo, department, academicYear, phoneNumber } = req.body;

    // Check if student already exists
    const existingStudent = await Student.findOne({ rollNo });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student with this roll number already exists.' });
    }

    const newStudent = new Student({ name, rollNo, department, academicYear, phoneNumber });
    await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering student', error: error.message });
  }
};


// Fetch all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching student records', error: error.message });
  }
};

// Fetch a student by Roll Number
exports.getStudentByRollNo = async (req, res) => {
  try {
    const { rollNo } = req.params;
    const student = await Student.findOne({ rollNo });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching student', error: error.message });
  }
};

// Update a student
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, rollNo, department, year, academicYear } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, rollNo, department, year, academicYear },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating student', error: error.message });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: 'Student deleted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
};
