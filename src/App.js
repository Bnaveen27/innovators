import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Members from './Pages/Members/Members';
import Gallery from './Pages/Gallery/Gallery';
import Contactus from './Pages/Contactus/Contactus';
import Login from '../src/Pages/Login/Login';
import Signup from './Pages/Registration/Signup';

const App = () => {
  // Navbar with About page combined
  const NavbarWithImage = () => (
    <>
      <Navbar/>
      <About/>
    </>
  );

  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<NavbarWithImage />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
