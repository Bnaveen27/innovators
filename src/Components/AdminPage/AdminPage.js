import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdFeed } from "react-icons/md";
import { FaFileUpload, FaRegCreditCard, FaDatabase, FaUserEdit } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import aiclogo from "../../Assets/Images/aic.png";

import "./AdminPage.css";

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-container">
      <nav className={`side-nav ${isSidebarOpen ? "open" : "collapsed"}`}>
        <div className="nav-top">
          <div className="logo-container">
            <div className="nav-logo">
              <img src={aiclogo} alt="logo" className="aic-logo" />
            </div>
            {isSidebarOpen && <h4 className="admin-title">Admin Dashboard</h4>}
          </div>
          <MdMenu className="menu-toggle" onClick={toggleSidebar} />
        </div>

        <ul className="nav-links">
          <li>
            <AiOutlineHome className="nav-icon" />
            {isSidebarOpen && <Link to="">Dashboard</Link>}
          </li>
          <li>
            <FaFileUpload className="nav-icon" />
            {isSidebarOpen && <Link to="/UploadFile">Upload Files</Link>}
          </li>
          <li>
            <FaRegCreditCard className="nav-icon" />
            {isSidebarOpen && <Link to="">Students Data</Link>}
          </li>
          <li>
            <MdFeed className="nav-icon" />
            {isSidebarOpen && <Link to="/Feedback">Feedback Data</Link>}
          </li>
          <li>
            <FaDatabase className="nav-icon" />
            {isSidebarOpen && <Link to="">Staff Data</Link>}
          </li>
          <li>
            <FaUserEdit className="nav-icon" />
            {isSidebarOpen && <Link to="">Editable</Link>}
          </li>
        </ul>

        {/* Bottom Section for Login Account and Logout */}
        <div className="nav-bottom">
          {isSidebarOpen && (
            <div className="account-section">
              <p className="account-name">Logged in as Admin</p>
              <button className="logout-button">Logout</button>
            </div>
          )}
        </div>
      </nav>

      <main className="main-content">
        <div className="content-fields">
          <div className="field-menus">
            <div className="upload-records">
              <h2 className="num-upload">Upload Files</h2>
              <p className="records">21</p>
            </div>

            <div className="student-records">
              <h2 className="num-student">Student Records</h2>
              <p className="records">21</p>
            </div>

            <div className="staff-records">
              <h2 className="num-staff">Staff Records</h2>
              <p className="records">21</p>
            </div>

            <div className="feedback-records">
              <h2 className="num-feedback">Feedback Records</h2>
              <p className="records">21</p>
            </div>

            <div className="year-wise-records">
              <h2 className="years-record">Year-Wise Records</h2>
              <p className="records">21</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
