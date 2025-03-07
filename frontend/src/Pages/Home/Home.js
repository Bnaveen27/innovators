import React, { useState, useEffect } from "react";
import "./Home.css"; 
import aboutus from "../../Assets/Images/About us.jpg";
import {Link} from 'react-router-dom';
import headFoto from '../../Assets/Images/MembersImg/codadi.jpg'

const Home = () => {
  const images = [
    require("../../Assets/Images/HeroImg/img-1.jpg"), 
    require("../../Assets/Images/HeroImg/img-2.jpg"),
    require("../../Assets/Images/aacfront.jpg"), 
    require("../../Assets/Images/met-1.jpg"),
  ];

  const quotes = [
    "Arul Anandar <span class='blue-text'>Incubation Center.</span>",
    "Sports are a way of life at our <span class='blue-text'>college.</span>",
    "Our campus is a beautiful place to <span class='blue-text'>study.</span>",
    "Together, we rise in academics and <span class='blue-text'>more.</span>"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  },);

  return (
    <div className="home-contain">   
     <div className="image-slider">
      {/* <button className="prev" onClick={prevImage}>
        &#10094;
      </button> */}

      <div className="slider-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
        <div className="image-overlay"></div> 
      </div>

      <div className="quote-overlay">
        <p className="quote-text" key={currentIndex}>
          <span dangerouslySetInnerHTML={{ __html: quotes[currentIndex] }} />
        </p>
      </div>

      {/* <button className="next" onClick={nextImage}>
        &#10095; 
      </button> */}
    </div>
    <div className="home-about">
        <div className="about-left">
          <img src={aboutus} alt="About us" />
        </div>
        
        <div className="about-right">
          <div className="about-desk">
            <h2 className="about-title">
              About Us
            </h2>
            <p className="about-cont">
              The "Web Portal for Arul Anandar Incubation Center" project aims
              to develop a comprehensive online platform tailored to the needs
              of entrepreneurs and startups affiliated with the Arul Anandar
              Incubation Center (AIC). This web portal serves as a digital hub
              facilitating various activities crucial for the incubation
              process, including mentorship, resource allocation, networking,
              and progress tracking. Key features of the portal include
              user-friendly registration and profile management functionalities
              for both entrepreneurs and mentors. Entrepreneurs can access a
              repository of resources such as funding opportunities, workshops,
              and industry insights. The platform fosters networking through
              forums, discussion boards, and virtual meetups, enabling knowledge
              exchange and collaboration among stakeholders. The portal also
              integrates tools for project management and progress monitoring,
              allowing entrepreneurs to set goals, track milestones, and receive
              feedback from mentors. Additionally, it provides a centralized
              dashboard for administrators to oversee operations, manage user
              accounts, and analyze performance metrics. By offering a
              streamlined interface for communication, resource access, and
              project management, the "Web Portal for Arul Anandar Incubation
              Center" enhances the efficiency and effectiveness of the
              incubation process, empowering entrepreneurs to navigate
              challenges, accelerate growth, and achieve sustainable success in
              their ventures.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mission-field">
        <div className="mission-desk">
          <h4 className="mission-titl">Mission</h4>
          <p className="mission-cont">
            Arul Anandar Incubation center (AIC) was constituted in 2023 under
            the able guidance of <b>Rev.Fr. Anbarasu SJ, (Principal,AAC) </b> and
            <b>  Rev.Fr. Antonysamy SJ (Secretary,AAC)</b> with due collaboration
            with IPR Cell and IQAC cell under the support of DEAN, Research,
            AAC. The following are the mision and objectives of the AIC. Mission
            To align AAC students with the Start-up India and Startup TN
            Movement To motivate and facilitate the students to develop an
            innovative idea and start Start-up Businesses To convert innovative
            ideas of the students into active business or to present a solution
            to the problems of different sectors.
          </p>
        </div>
      </div>

      <div className="incubation-content">
       <div className="incubation-committee">
        <h2 className="incub-head">INCUBATION MEMBER</h2>
       </div>

      <div className="headimg-field">
        <img src={headFoto} alt='HeadFoto'className="head-img"/>
      </div>
      <div className="committee-grid">
          <div className="committee-card">
            <h3 className="member-title">Convener Of The Incubation Center</h3>
            <p className="name">Dr. C. Justin David</p>
            <p className="position">M.Sc., M.Phil., Ph.D., Post Doc (USA)</p>
          </div>
        <button className="read-more"><Link to='https://www.aactni.edu.in/faculty/biodata/103122.pdf'>Know More</Link></button>
      </div>
  </div>
    </div>

  );
};

export default Home;
