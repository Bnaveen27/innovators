import React, { useState } from 'react';
import axios from 'axios';
import reglogo from '../../Assets/Images/reg2.jpg';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './StudentRegister.css';

const StudentsRegister = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [department, setDepartment] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const departments = [
    "Department of History",
    "Department of Economics",
    "Department of Philosophy",
    "Department of Mathematics",
    "Department of Physics",
    "Department of Chemistry",
    "Department of Rural Development Science",
    "Department of Tamil-Aided",
    "Department of English-Aided",
    "Department of Tamil-SF",
    "Department of English-SF",
    "Department of Commerce with Computer Applications",
    "Department of Business Administration",
    "Department of Information Technology and Management",
    "Department of Physical Education",
    "Department of Computer Science and Applications",
    "Department of Food Science and Technology"
  ];

  const academicYears = ["2024-27", "2025-28", "2028-31"];

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";


  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { name, rollNo, department, academicYear, phoneNumber };

    try {
      await axios.post(`${API_URL}/Routes/StudentRoutes/Pages/StudentRegister/StudentsRegister`, studentData);
      
      // Old style success toast
      toast.success("Student registered successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      setName('');
      setRollNo('');
      setDepartment('');
      setAcademicYear('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Error registering student:', error);

      // Old style error toast
      toast.error("Failed to register student!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <div className="header-left">
          <img src={reglogo} alt="Logo" className="logo" />
        </div>
        <div className="header-title">
          <h2>Students Register</h2>
        </div>
      </div>

      <div className="register-fields">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-input">
            <label>Roll No:</label>
            <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required />
          </div>
          <div className="form-input">
            <label>Department:</label>
            <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
              <option value="">Select Department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          <div className="form-input">
            <label>Academic Year:</label>
            <select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} required>
              <option value="">Select Academic Year</option>
              {academicYears.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="form-input">
            <label>Phone Number:</label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} pattern="^\d{10}$" maxLength="10" title="Phone number must be 10 digits." required />
          </div>
          <div>
            <button type="submit" className="register-btn">Submit</button>
          </div>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default StudentsRegister;
