import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.css";
import aaicLogo from "../../Assets/Images/aic-logo.png";
import aacLogo from "../../Assets/Images/logo_small.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={aacLogo} alt="Logo" className="logo" />
          <div className="college-info">
            <h1 className="college-name">Arul Anandar College</h1>
            <p className="tagline">An Autonomous Institution</p>
            {/* <p className="tagline-rel">Reaccredited by NAAC at “A” Grade</p> */}
          </div>
        </div>

        <div className="navbar-middle">
          <h2 >Arul Anandar Incubation Center</h2>
        </div>

        <div className="navbar-right">
          <img src={aaicLogo} alt="aaic-logo" className="aaiclogo" />
        </div>
        <div className="sidebar-toggle" onClick={toggleMenu}>
          <MdMenu className="burger-menu" />
        </div>
      </nav>
      <div className="menu-sec">
        <ul>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Members" className="li">
            Members
          </Link>
          <Link to="/Gallery" className="li">
            Gallery
          </Link>
          {/* <Link to="/DummyReport" className="li">
            DummyReports
          </Link> */}
          <Link to="/DummyReport" className="li">
            Reports
          </Link>
          
          <Link to="/Login">Admin Login</Link>
        </ul>
      </div>

      <div className={`Side-sec ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          <MdClose className="close-icon" />
        </div>
        <h4 className="side-h4">AIC WEB PORTAL</h4>
        <ul>
          <li>
            <Link to="/Home" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/Members" className="link">
              Members
            </Link>
          </li>
          <li>
            <Link to="/Gallery" className="link">
              Gallery
            </Link>
          </li>
          {/* <li>
            <Link to="/DummyReport" className="link">
              DummyReports
            </Link>
          </li> */}
          <li>
            <Link to="/DummyReport" className="link">
              Reports
            </Link>
          </li>
          <li>
            <button className="admin-log "><Link to="/Login">Admin Login</Link></button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
