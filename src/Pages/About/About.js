import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="content">
        <h4 className="cont-head">About Incubation Center</h4>
      </div>

      <div className="about-desk">
        <p className="about-cont">
          The "Web Portal for Arul Anandar Incubation Center" project aims
          to develop a comprehensive online platform tailored to the needs of
          entrepreneurs and startups affiliated with the Arul Anandar Incubation
          Center. This web portal serves as a digital hub facilitating various
          activities crucial for the incubation process, including mentorship,
          resource allocation, networking, and progress tracking. Key features
          of the portal include user-friendly registration and profile
          management functionalities for both entrepreneurs and mentors.
          Entrepreneurs can access a repository of resources such as funding
          opportunities, workshops, and industry insights. The platform fosters
          networking through forums, discussion boards, and virtual meetups,
          enabling knowledge exchange and collaboration among stakeholders. The
          portal also integrates tools for project management and progress
          monitoring, allowing entrepreneurs to set goals, track milestones, and
          receive feedback from mentors. Additionally, it provides a centralized
          dashboard for administrators to oversee operations, manage user
          accounts, and analyze performance metrics. By offering a streamlined
          interface for communication, resource access, and project management,
          the "Web Portal for Arul Anandar Incubation Center" enhances the
          efficiency and effectiveness of the incubation process, empowering
          entrepreneurs to navigate challenges, accelerate growth, and achieve
          sustainable success in their ventures.
        </p>
      </div>
<div className="mission-row">
      <div className="mission-desk">
          <h4 className="mission-titl">Mission</h4>
        <p className="mission-cont">
          ArulAnandar Incubation center (AIC) was constituted in 2023 under the
          able guidance of Rev.Fr. Anbarasu SJ, (Principal, AAC) and Rev.Fr.
          Antonysamy SJ (Secretary,AAC) with due collaboration with IPR Cell and
          IQAC cell under the support of DEAN, Research, AAC. The following are
          the mision and objectives of the AIC. Mission To align AAC students
          with the Start-up India and Startup TN Movement To motivate and
          facilitate the students to develop an innovative idea and start
          Start-up Businesses To convert innovative ideas of the students into
          active business or to present a solution to the problems of different
          sectors.
        </p>
      </div>
      <div className="circular-ad">
        <div className="circular-details">
          <p className="circular-tit">circular</p>
        <Link>Invitation</Link>
        <Link>Competition</Link>
        <Link>Invitation</Link>
        <Link>Invitation</Link>
        <Link>Invitation</Link>
        </div>
      </div>
  </div>

    </div>
  );
};

export default About;
