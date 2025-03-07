import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css";

const Signup = () => {
  const [Username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/Pages/Registration/Signup`, { Username, email, password })
      .then(result => {
        console.log(result);
        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 3000,
        });

        setTimeout(() => {
          navigate('/Login');
        }, 3000);
      })
      .catch(err => {
        console.error(err);
        toast.error(" Registration failed!", {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className='container-sign'>
      <div className='wrapper'>
        <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required onChange={(e) => setUserName(e.target.value)} />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
              <FaEnvelope className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> I agree to the terms & conditions</label>
            </div>
            <button type="submit">Register</button>

            <div className="register-link">
              <p>Already have an account? <Link to='/Login'>Login</Link></p>
            </div>
            <div className='back-icon'>
              <Link to="/"><IoArrowBackCircleOutline /></Link>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default Signup;
