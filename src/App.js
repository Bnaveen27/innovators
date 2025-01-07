import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Members from "./Pages/Members/Members";
import Gallery from "./Pages/Gallery/Gallery";
import Contactus from "./Pages/Contactus/Contactus";
import Login from "../src/Pages/Login/Login";
import Signup from "./Pages/Registration/Signup";
import Report from "./Pages/Report/Reports";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SplashScreen from "./Pages/SplashScreen/SplashScreen"; 
import "./App.css";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  }, []);

  const NavbarWithImage = () => (
    <>
      <Navbar />
      <Home />
      <About />
      <Members />
    </>
  );

  return (
    <div className="overflow-x-hidden">
      {loading ? (
        <SplashScreen /> 
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<NavbarWithImage />} />
            <Route path="/Home" element={<NavbarWithImage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Members" element={<Members />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registration" element={<Signup />} />
          </Routes>
      <Footer/>
        </Router>
        
      )}
    </div>
  );
};

export default App;
