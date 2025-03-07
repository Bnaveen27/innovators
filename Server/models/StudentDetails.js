const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  academicYear: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const Student = mongoose.model('studentdetails', studentSchema);

module.exports = Student;
