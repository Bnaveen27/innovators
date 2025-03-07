import React from "react";
import "./About.css";
import heroabout from "../../Assets/Images/diamond.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const About = () => {
  return (
    <div className="about-section">
      <Navbar />
      <div className="hero-sec">
        <img src={heroabout} alt="heroImage" className="hero-image" />
        <div className="hero-text">
          <span>About-Us</span>
        </div>
      </div>

      <div className="about-wrapper">
        <div className="about-row">
          <h2 className="about-side">About Arul Anandar Incubation</h2>
          <p className="about-para">
            The "Web Portal for Arul Anandar Incubation Center" project aims to
            develop a comprehensive online platform tailored to the needs of
            entrepreneurs and startups affiliated with the Arul Anandar
            Incubation Center (AIC). This web portal serves as a digital hub
            facilitating various activities crucial for the incubation process,
            including mentorship, resource allocation, networking, and progress
            tracking. Key features of the portal include user-friendly
            registration and profile management functionalities for both
            entrepreneurs and mentors. Entrepreneurs can access a repository of
            resources such as funding opportunities, workshops, and industry
            insights. The platform fosters networking through forums, discussion
            boards, and virtual meetups, enabling knowledge exchange and
            collaboration among stakeholders. The portal also integrates tools
            for project management and progress monitoring, allowing
            entrepreneurs to set goals, track milestones, and receive feedback
            from mentors. Additionally, it provides a centralized dashboard for
            administrators to oversee operations, manage user accounts, and
            analyze performance metrics. By offering a streamlined interface for
            communication, resource access, and project management, the "Web
            Portal for Arul Anandar Incubation Center" enhances the efficiency
            and effectiveness of the incubation process, empowering
            entrepreneurs to navigate challenges, accelerate growth, and achieve
            sustainable success in their ventures.
          </p>
        </div>
      </div>
      {/* <div className="mission-field">
        <div className="mission-desk">
          <h4 className="mission-titl">Mission</h4>
          <p className="mission-cont">
            Arul Anandar Incubation center (AIC) was constituted in 2023 under
            the able guidance of <b>Rev.Fr. Anbarasu SJ, (Principal,AAC) </b>{" "}
            and
            <b> Rev.Fr. Antonysamy SJ (Secretary,AAC)</b> with due collaboration
            with IPR Cell and IQAC cell under the support of DEAN, Research,
            AAC. The following are the mision and objectives of the AIC. Mission
            To align AAC students with the Start-up India and Startup TN
            Movement To motivate and facilitate the students to develop an
            innovative idea and start Start-up Businesses To convert innovative
            ideas of the students into active business or to present a solution
            to the problems of different sectors.
          </p>
        </div>
      </div> */}

      <div className="objective-field">
        <div className="object-desk">
          <h4 className="object-titl">Objectives</h4>
          <p className="object-cont">
            Following are the objectives of Innovation and Start-up Policy of
            AAC To create a Start-up boosting ecosystem in the College To
            provide platform for our students in presentation, discussion and
            developing innovative ideas in different field and motivate the
            students to transform innovative ideas into active Start-up
            businesses Interact with Government and Regulatory Institutions to
            provide regular motivational and monetary support to innovative
            ideas and Start-ups developed by our College students To provide
            opportunities to interact with experienced entrepreneurs/ companies
            and provide mentoring at various stages of business ideas and
            innovations To provide administrative and initial seed funding or
            financial support for the development and growth of outstanding
            innovative ideas and discoveries To create and promote awareness
            among faculties and students about adoption of IPRs. To propel
            successful students with outstanding innovation through augmentation
            of incubation and RD efforts in collaboration with government and
            non-government agencies To develop a mentoring and technical support
            network of renowned Entrepreneurs and District Industries Center and
            StartUp TN and StartUp India to facilitate the innovative ideas and
            student Start-ups as per their requirement. To get stake holding in
            Start-ups developed in the College and promote other following
            Start- ups incubated by AIC through the revenue generated from stake
            holdings. Policy recommendations of ArulAnandar Incubation Center
            Main focus of AIC is to foster, train and identify creativity and
            innovation among our college students resulting in Submission of
            Innovation and Start-up business ideas to AIC
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
