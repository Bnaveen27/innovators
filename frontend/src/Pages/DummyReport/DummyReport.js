import React from "react";
import { Link } from "react-router-dom";
import why from "../../Assets/Images/blank-papers.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { FaFilePdf } from "react-icons/fa";
import "./DummyReport.css";
const DummyReport = () => {
  return (
    <div className="dummy-container">
      <Navbar />
      <div className="dummy-wrapper">
        <div className="dummy-hero">
          <img src={why} alt="" className="hero-back" />
        </div>
        <div className="img-text">
          <span className="report-text">Reports</span>
        </div>
      </div>

      <div className="dummy-fields">
        <div class="report-row">
          <FaFilePdf className="report-icon"/>                    
          <div class="repot-gallery-text ">
            <Link to ='/NotFound'className="repot-text">2022-2023</Link>
          </div>
        </div>
        <div class="report-row">
          <FaFilePdf className="report-icon"/>                    
          <div class="repot-gallery-text ">
          <Link to ='/NotFound'className="repot-text">2023-2024</Link>
          </div>
        </div>
        <div class="report-row">
          <FaFilePdf className="report-icon"/>                    
          <div class="repot-gallery-text ">
          <Link to ='/NotFound'className="repot-text">2024-2025</Link>
          </div>
        </div>
        <div class="report-row">
          <FaFilePdf className="report-icon"/>                    
          <div class="repot-gallery-text ">
          <Link to ='/NotFound'className="repot-text">2025-2026</Link>
          </div>
        </div>
        <div class="report-row">
          <FaFilePdf className="report-icon"/>                    
          <div class="repot-gallery-text ">
          <Link to ='/NotFound'className="repot-text">2026-2027</Link>
          </div>
        </div>
        <div class="report-row">
          <FaFilePdf className="report-icon"/>                    
          <div class="repot-gallery-text ">
          <Link to ='/NotFound'className="repot-text">2027-2028</Link>
          </div>
        </div>
        <div class="report-row">
          <FaFilePdf className="report-icon"/>                    
          <div class="repot-gallery-text ">
          <Link to ='/NotFound'className="repot-text">2029-2030</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DummyReport;
