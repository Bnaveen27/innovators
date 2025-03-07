import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Registration/Signup.css";

const Login = () => {
  const [Username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/Pages/Login/Login`, { Username, password })
      .then((result) => {
        if (result.data === "Success") {
          localStorage.setItem("loggedInUser", Username);
          toast.success("Login successful!", { position: "top-right", autoClose: 3000 });

          setTimeout(() => {
            navigate("/AdminPanel");
          }, 3000);
        } else {
          toast.error("Invalid credentials! Please try again.", { position: "top-right", autoClose: 3000 });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login failed! Server error.", { position: "top-right", autoClose: 3000 });
      });
  };

  return (
    <div className="container-sign">
      <div className="wrapper">
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required onChange={(e) => setUserName(e.target.value)} />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit">Login</button>
            <div className="back-icon">
              <Link to="/">
                <IoArrowBackCircleOutline />
              </Link>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
