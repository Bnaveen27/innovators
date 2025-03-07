import React, { useState, useEffect  } from "react";
import { AiOutlineMenu, AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaFileUpload, FaRegCreditCard, FaDatabase, FaUserEdit } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { MdFeed } from "react-icons/md";
import "./AdminPanel.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [fileCount, setFileCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";


  useEffect(() => {
    const username = localStorage.getItem("loggedInUser");
    if (!username) {
      navigate("/"); // Redirect to login if not logged in
    }
    setLoggedInUser(username);

    const fetchFileCount = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/Routes/UploadRoutes/Pages/GetRecords`
        );
        setFileCount(response.data.records.length);
      } catch (error) {
        console.error("Error fetching file count:", error);
      }
    };

    const fetchStudentCount = async () => {
      try {
        const response = await axios.get(`${API_URL}/Routes/StudentRoutes/student`);
        setStudentCount(response.data.length);
      } catch (error) {
        console.error("Error fetching student count:", error);
      }
    };

    fetchFileCount();
    fetchStudentCount();
  }, [API_URL,navigate]);

  const logout = () => {
    localStorage.removeItem("loggedInUser"); // Clear session
    navigate("/Login"); // Redirect to login page
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2 className="brand-name">AIC</h2>
          <button className="toggle-menu" onClick={toggleSidebar}>
            <AiOutlineMenu />
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <AiOutlineHome className="side-icon" />
            <Link className="menu-text">Dashboard</Link>
          </li>
          <li>
            <FaFileUpload className="side-icon" />
            <Link to="/UploadFile" className="menu-text">Upload Files</Link>
          </li>
          <li>
            <FaRegFileLines className="side-icon" />
            <Link to="/Reports" className="menu-text">Reports</Link>
          </li>
          <li>
            <FaRegCreditCard className="side-icon" />
            <Link to="/StudentsData" className="menu-text">Students Data</Link>
          </li>
          <li>
            <MdFeed className="side-icon" />
            <Link to="/Feedback" className="menu-text">Feedback Data</Link>
          </li>
          <li>
            <FaDatabase className="side-icon" />
            <Link to="/StudentRegister" className="menu-text">Students Reg</Link>
          </li>
        </ul>
        <ul className="sidebar-footer">
          <li>
            <FaUserEdit className="side-icon" />
            <Link to="" className="menu-text">Editable</Link>
          </li>
          <li onClick={logout} style={{ cursor: "pointer" }}>
            <FiLogOut className="side-icon" />
            <span className="menu-text">Logout</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-title">Dashboard</div>
          <div className="header-user">
            <span className="user-name">{loggedInUser}</span>
            <AiOutlineUser className="user-icon" />
          </div>
        </header>

        {/* Statistics Section */}
        <div className="content-fields">
          <div className="Upload-records">
            <h2 className="num-upload">Uploaded Files Records</h2>
            <p className="records-count">{fileCount}</p>
          </div>
          <div className="student-records">
            <h2 className="num-students">Students Record</h2>
            <p className="records-count">{studentCount}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
