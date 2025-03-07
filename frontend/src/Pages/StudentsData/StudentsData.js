import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentsData.css';

const StudentsData = () => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);
  const [formData, setFormData] = useState({ name: '', rollNo: '', department: '', phoneNumber: '', academicYear: '' });
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const departments = [
    'Computer science & Application',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Food science & technology',
    'Rural development science',
    'Economics',
    'History',
    'Tamil Literature',
    'English Literature',
    'Commerce With CA',
    'Physical Education',
    'Information technology',
    'Business administration',
    'Philosophy',
    'Human excellence',
  ];

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";


  useEffect(() => {
    axios
      .get(`${API_URL}/Routes/StudentRoutes/student`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student records:', error);
      });
  }, [API_URL]);

  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      try {
        await axios.delete(`${API_URL}/Routes/StudentRoutes/Student/${id}`);
        setStudents(students.filter((student) => student._id !== id));
        alert('Student deleted successfully!');
      } catch (error) {
        console.error('Error deleting student:', error);
        alert('Failed to delete student.');
      }
    } else {
      alert('Deletion canceled.');
    }
  };

  const handleEditClick = (student) => {
    setEditStudent(student);
    setFormData({
      name: student.name,
      rollNo: student.rollNo,
      department: student.department,
      phoneNumber: student.phoneNumber,
      academicYear: student.academicYear,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const updateStudent = async () => {
    try {
      const { name, rollNo, department, phoneNumber, academicYear } = formData;
      await axios.put(`${API_URL}/Routes/StudentRoutes/Student/${editStudent._id}`, {
        name,
        rollNo,
        department,
        phoneNumber,
        academicYear,
      });
      setStudents(
        students.map((student) =>
          student._id === editStudent._id
            ? { ...student, name, rollNo, department, phoneNumber, academicYear }
            : student
        )
      );
      alert('Student updated successfully!');
      setEditStudent(null);
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update student.');
    }
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const downloadCSV = () => {
    const csvRows = [
      ['Name', 'Roll No', 'Department', 'Phone Number', 'Academic Year'], // Header row
      ...filteredStudents.map((student) => [
        student.name,
        student.rollNo,
        student.department,
        student.phoneNumber,
        student.academicYear,
      ]),
    ];
  
    const csvContent = csvRows.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
    // Dynamically generate the file name
    const departmentPart = selectedDepartment || 'All_Departments';
    const academicYearPart = formData.academicYear || 'All_Years';
    const fileName = `students_${departmentPart.replace(/[\s&]+/g, '_')}_${academicYearPart}.csv`;
  
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  const filteredStudents = selectedDepartment
    ? students.filter((student) => student.department === selectedDepartment)
    : students;

  return (
    <div className="data-container">
      <div className="students-data">
        <h2 className="data-head">Students List</h2>
      </div>
      <div className="filter-container">
        <label htmlFor="departmentFilter">Filter by Department:</label>
        <select
          id="departmentFilter"
          className="filter-select"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="">All Departments</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        <button className="download-btn" onClick={downloadCSV}>
          Download CSV
        </button>
      </div>
      <div className="table-fields">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Department</th>
              <th>Phone Number</th>
              <th>Academic Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.department}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.academicYear}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEditClick(student)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => deleteStudent(student._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="editable-fields">
        {editStudent && (
          <div className="edit-form">
            <h3 className="edit-head">Edit Student</h3>
            <label className="edit-label">
              Name:
              <input
                type="text"
                className="edit-input"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label className="edit-label">
              Roll No:
              <input
                type="text"
                className="edit-input"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleInputChange}
              />
            </label>
            <label className="edit-label">
              Department:
              <select
                name="department"
                className="edit-input"
                value={formData.department}
                onChange={handleInputChange}
              >
                <option value="">Select Department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </label>
            <label className="edit-label">
              Phone Number:
              <input
                type="text"
                className="edit-input"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="e.g., 1234567890"
              />
            </label>
            <label className="edit-label">
              Academic Year:
              <input
                type="text"
                className="edit-input"
                name="academicYear"
                value={formData.academicYear}
                onChange={handleInputChange}
                placeholder="e.g., 2023-2024"
              />
            </label>
            <button className="save-btn" onClick={updateStudent}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setEditStudent(null)}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsData;
