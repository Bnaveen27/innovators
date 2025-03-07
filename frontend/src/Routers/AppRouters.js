import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "../Animation/SplashScreen/SplashScreen";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Members from "../Pages/Members/Members";
import Gallery from "../Pages/Gallery/Gallery";
import Reports from "../Pages/Report/Reports";
import Contactus from "../Pages/Contactus/Contactus";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Registration/Signup";
import Footer from "../Components/Footer/Footer";
import AdminPage from "../Components/AdminPage/AdminPage";
import Feedback from "../Pages/Feedback/Feedback";
import UploadFile from "../Pages/UploadFiles/UploadFile";
import StudentRegister from "../Pages/StudentRegister/StudentsRegister";
import StudentsData from "../Pages/StudentsData/StudentsData";
import AdminPanel from "../Components/AdminPage/AdminPanel";
import DummyReport from "../Pages/DummyReport/DummyReport";
import NotFoundPage from "../Pages/NotFound/NotFoundPage";
import Event from "../Pages/Event/Event";

const AppRouters = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);
  
    const NavbarWithImage = () => (
      <>
        <Navbar />
        <Home />
        <Footer />
        
      </>
    );
  
    return (
      <div className="Routers">
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
              <Route path="/Contactus" element={<Contactus />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Feedback" element={<Feedback/>} />
              <Route path="/AdminPage" element={<AdminPage/>} />
              <Route path="/UploadFile" element={<UploadFile/>} />
              <Route path="/Registration" element={<Signup />} />
              <Route path='/StudentRegister' element={<StudentRegister/>}/>
              <Route path='/StudentsData' element={<StudentsData/>}/>
              <Route path='/Reports' element={<Reports/>}/>
              <Route path='/AdminPanel' element={<AdminPanel/>}/>
              <Route path='/DummyReport' element={<DummyReport/>}/>
              <Route path='/NotFound' element={<NotFoundPage/>}/>
              <Route path='/Event' element={<Event/>}/>

            </Routes>
          </Router>
        )}
      </div>
    );
  };

export default AppRouters
