import React from "react";
import "./Members.css";
import bba from "../../Assets/Images/MembersImg/bba-mem.jpg";
import com from "../../Assets/Images/MembersImg/com-mem.jpg";
import csc from "../../Assets/Images/MembersImg/csc-mem.jpg";
import fst from "../../Assets/Images/MembersImg/fst-mem.jpg";
import eco from "../../Assets/Images/MembersImg/eco-mem.jpg";
import chm from "../../Assets/Images/MembersImg/chem-mem.jpg";
import phy from "../../Assets/Images/MembersImg/phy-mem.jpg";
// import rds from "../../Assets/Images/MembersImg/codadi.jpg";
import Footer from "../../Components/Footer/Footer";
const Members = () => {
  const MembersData = [
    {
      id: 1,
      img: bba,
      position: "Member",
      name: "Dr.S. Sheik Fareeth",
      tagline: "MBA, M.Phil, PhD, SET, NET",
      department: "Department Of BBA",
      link: "https://www.aactni.edu.in/faculty/biodata/10329.pdf",
    },
    {
      id: 2,
      img: csc,
      position: "Member",
      name: "Ms.J. Annie Jennifer",
      tagline: "M.Sc., M.Phil., NET",
      department: "Department Of Computer Science & Application",
      link: "https://www.aactni.edu.in/faculty/biodata/10331.pdf",
    },
    {
      id: 3,
      img: eco,
      position: "Member",
      name: "Dr.E. Nanda Kumar",
      tagline: "M.A, M.Phil., PhD, NET",
      department: "Department of Economics",
      link: "https://www.aactni.edu.in/faculty/biodata/103131.pdf",
    },
    {
      id: 4,
      img: phy,
      position: "Member",
      name: "Dr.M. Antony",
      tagline: "M.Sc., M.Phil., PhD",
      department: "Department of Physics",
      link: "https://www.aactni.edu.in/faculty/biodata/10274.pdf",
    },
    {
      id: 5,
      img: chm,
      position: "Member",
      name: "Dr.M. Easuraja",
      tagline: "M.Sc., M.Phil., PhD",
      department: "Department of Chemistry",
      link: "https://www.aactni.edu.in/faculty/biodata/10284.pdf",
    },
    {
      id: 6,
      img:'',
      position: "Member",
      name: "Mr.P. Parthipan",
      tagline: "MVSc., NET",
      department: "Department of Rural Development Science",
      link: "",
    },
    {
      id: 7,
      img: com,
      position: "Member",
      name: "Dr.K. Ramya",
      tagline: "M.Com., M.Phil., PhD, PGDCA, SET, NET",
      department: "Department of Commerce & Application",
      link: "https://www.aactni.edu.in/faculty/biodata/10256.pdf",
    },
    {
      id: 8,
      img: fst,
      position: "Member",
      name: "Ms.P. Revathi",
      tagline: "M.Sc., M.Phil., SET, NET",
      department: "Department of Food Science & Technology",
      link: "https://www.aactni.edu.in/faculty/biodata/10246.pdf",
    },
  ];

  return (
    <div className="member-container">
      <div className="member-top">
        <h2 className="member-head">AAIC INCUBATION MEMBERS</h2>
      </div>

      <div className="member-grid">
        {MembersData.map((member) => (
         <div className="members-card">
         <div className="img-field">
           <img
             src={member.img || "placeholder.jpg"} 
             alt={member.name}
             className="member-image"
           />
         </div>
         <div className="member-details">
           <h3 className="member-position">{member.position}</h3>
           <p className="member-name">{member.name}</p>
           <p className="member-tagline">{member.tagline}</p>
           <p className="member-department">{member.department}</p>
           <div className="button-wrapper">
             <button className="Know-more">
               <a href={member.link} target="_blank" rel="noopener noreferrer">
                 Know More
               </a>
             </button>
           </div>
         </div>
       </div>       
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Members;
