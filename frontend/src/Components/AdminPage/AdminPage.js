// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdMenu, MdFeed } from "react-icons/md";
// import { FaFileUpload, FaRegCreditCard, FaDatabase, FaUserEdit } from "react-icons/fa";
// import { AiOutlineHome } from "react-icons/ai";
// // import aiclogo from "../../Assets/Images/aic.png";
// import axios from "axios";
// import "./AdminPage.css";

// const AdminPage = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [fileCount, setFileCount] = useState(0);
//   const [studentCount, setStudentCount] = useState(0);
//   const [loggedInUser, setLoggedInUser] = useState("");
//   const navigate = useNavigate();
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   useEffect(() => {
//     const username = localStorage.getItem("loggedInUser");
//     if (!username) {
//       navigate("/"); 
//     }
//     setLoggedInUser(username);

//     const fetchFileCount = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/Routes/UploadRoutes/Pages/GetRecords"
//         );
//         setFileCount(response.data.records.length);
//       } catch (error) {
//         console.error("Error fetching file count:", error);
//       }
//     };

//     const fetchStudentCount = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/Routes/StudentRoutes/student");
//         setStudentCount(response.data.length);
//       } catch (error) {
//         console.error("Error fetching student count:", error);
//       }
//     };

//     fetchFileCount();
//     fetchStudentCount();
//   }, [navigate]);

//   const logout = () => {
//     localStorage.removeItem("loggedInUser"); 
//     navigate("/"); 
//   };

//   return (
//     <div className="admin-container">
//       <nav className={`side-nav ${isSidebarOpen ? "open" : "collapsed"}`}>
//         <div className="nav-top">
//           <div className="logo-container">
            
//             {isSidebarOpen && <h4 className="admin-title">Admin Dashboard</h4>}
//           </div>
//           <MdMenu className="menu-toggle" onClick={toggleSidebar} />
//         </div>

//         <ul className="nav-links">
//           <li>
//             <AiOutlineHome className="nav-icon" />
//             {isSidebarOpen && <Link to="">Dashboard</Link>}
//           </li>
//           <li>
//             <FaFileUpload className="nav-icon" />
//             {isSidebarOpen && <Link to="/UploadFile">Upload Files</Link>}
//           </li>
//           <li>
//             <FaRegCreditCard className="nav-icon" />
//             {isSidebarOpen && <Link to="/StudentsData">Students Data</Link>}
//           </li>
//           <li>
//             <MdFeed className="nav-icon" />
//             {isSidebarOpen && <Link to="/Feedback">Feedback Data</Link>}
//           </li>
//           <li>
//             <FaDatabase className="nav-icon" />
//             {isSidebarOpen && <Link to="">Staff Data</Link>}
//           </li>
//           <li>
//             <FaUserEdit className="nav-icon" />
//             {isSidebarOpen && <Link to="">Editable</Link>}
//           </li>
//         </ul>

//         <div className="nav-bottom">
//           {isSidebarOpen && (
//             <div className="account-section">
//               <p className="account-name">Logged in as {loggedInUser}</p>
//               <button className="logout-button" onClick={logout}>
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       <main className="main-content">
//         <div className="content-fields">
//           <div className="field-menus">
//             <div className="upload-records" >
//               <h2 className="num-upload">Uploaded Files Records</h2>
//               <p className="records">{fileCount}</p>
//             </div>
//             <div className="student-records">
//               <h2 className="num-student">Students Record</h2>
//               <p className="records">{studentCount}</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminPage;
