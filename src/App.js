import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Members from './Pages/Members/Members';
import Gallery from './Pages/Gallery/Gallery';
import Contactus from './Pages/Contactus/Contactus';
import Login from '../src/Pages/Login/Login';
import Signup from './Pages/Registration/Signup';
import Report from './Pages/Report/Reports'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import './App.css'
const App = () => {
  const NavbarWithImage = () => (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Members/>
    
    </>
  );

  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<NavbarWithImage />} />
          <Route path="/Home" element={<NavbarWithImage /> } />
          <Route path="/About" element={<About/>} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Report" element={<Report/>} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Signup />} />
        </Routes>
      </Router>

      <footer>
      <div className="footerContent">
        <p>&copy; 2024 Arul Anandar College. All Rights Reserved.</p>
        <div className="socialLinks">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default App;
