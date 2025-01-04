import React from "react";
import {Link} from 'react-router-dom';
import headFoto from '../../Assets/codadi.jpg'
import headLine from '../../Assets/border_img.png'
import "./Members.css";

const Members = () => {
  const committeeData = [
    {
      title: "Head Of The Incubation Center",
      name: "Dr. C. Justin David",
      position: "M.Sc., M.Phil., Ph.D., Post Doc (USA)",
    }
  ];

  return (
    <div className="incubation-content">
       <div className="incubation-committee">
        <h2 className="incub-head">INCUBATION MEMBER</h2>
         <span><img src={headLine} alt='______' className="title_border"/></span>
       </div>

      <div className="img-field">
        <img src={headFoto} alt='HeadFoto'className="head-img"/>
      </div>
      <div className="committee-grid">
        {committeeData.map((member, index) => (
          <div key={index} className="committee-card">
            <h3 className="member-title">{member.title}</h3>
            <p className="name">{member.name}</p>
            <p className="position">{member.position}</p>
          </div>
        ))}
        <button className="read-more"><Link to='https://www.aactni.edu.in/faculty/biodata/103122.pdf'>Read More</Link></button>
      </div>
  </div>
  );
};

export default Members;
