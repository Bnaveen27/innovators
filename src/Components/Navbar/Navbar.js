import React from "react";
// import { MdMenu } from "react-icons/md";
// import ResponsiveMenu from './ResponsiveMenu';
import "./Navbar.css";
import { Link } from "react-router-dom";
import aaicLogo from "../../Assets/aic.png";
import aacLogo from "../../Assets/logo_small.png";

const Navbar = () => {
  // const [open, setOpen] = React.useState(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={aacLogo} alt="Logo" className="logo" />
          <div className="college-info">
            <h1 className="college-name">Arul Anandar College</h1>
            <p className="tagline">An AUTONOMOUS Institution</p>
          </div>
              <h2 className="hidden md:block">AAC INCUBATION PORTAL</h2>
        </div>
        <div className="navbar-right hidden md:block">
          <img src={aaicLogo} alt="aaic-logo" className="aaiclogo" />
        </div>

        {/* <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-4xl" />
        </div> */}
      </nav>
      {/* mobile sidebar section */}
      {/* <ResponsiveMenu open={open} /> */}
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

          <Link to="/Reports" className="li">
            Reports
          </Link>
          {/* <div className="log-sec">           */}
          <button className="admin-log">
            <Link to="/Login">Admin Login</Link>
          </button>
          {/* </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
