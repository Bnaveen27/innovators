import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UploadFile.css';
import colgeLogo from "../../Assets/Images/logo_small.png";

const UploadFile = () => {
  const [formData, setFormData] = useState({
    date: '',
    image: [],
    report: [],
    feedback: [],
    invitation: [],
    circular: [],
    participantList: [], 
  });

  const [formKey, setFormKey] = useState(0); 

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: Array.from(files),
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('date', formData.date);
    formData.image.forEach((file) => data.append('image', file));
    formData.report.forEach((file) => data.append('report', file));
    formData.feedback.forEach((file) => data.append('feedback', file));
    formData.invitation.forEach((file) => data.append('invitation', file));
    formData.circular.forEach((file) => data.append('circular', file));
    formData.participantList.forEach((file) => data.append('participantList', file));

    try {
      await axios.post(
        `${API_URL}/Routes/UploadRoutes/Pages/UploadFiles/UploadFile`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      toast.success("Files uploaded successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({
        date: '',
        image: [],
        report: [],
        feedback: [],
        invitation: [],
        circular: [],
        participantList: [],
      });
      setFormKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error('Upload failed:', error.response?.data || error.message);
      
      toast.error("Error uploading files!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="form-container">
      <div className='upload-header'>
        <header className='upload-top'>
          <img src={colgeLogo} alt='College-Logo' className='colge-img'/>
          <div className='head-content'>
            <p className='coll-name'>Arul Anandar College(Autonomous)</p>
            <h6>Karumathur-Madurai</h6>
          </div>
        </header>
      </div>
      <div className="upload-wrapper">
        <form key={formKey} className="form-data" onSubmit={handleSubmit}>
          <h2 className="upload">Upload Form</h2>
          <div className="upload-input">
            <label className="field-label">Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleDateChange} required/>
          </div>
          <div className="upload-input">
            <label className="field-label">Images:</label>
            <input type="file" name="image" multiple onChange={handleFileChange} />
          </div>
          <div className="upload-input">
            <label className="field-label">Reports:</label>
            <input type="file" name="report" multiple onChange={handleFileChange} accept=".pdf,.doc,.docx,.txt"/>
          </div>
          <div className="upload-input">
            <label className="field-label">Invitations:</label>
            <input type="file" name="invitation" multiple onChange={handleFileChange} />
          </div>
          <div className="upload-input">
            <label className="field-label">Circulars:</label>
            <input type="file" name="circular" multiple onChange={handleFileChange} />
          </div>
          <div className="upload-input">
            <label className="field-label">Participant List:</label>
            <input type="file" name="participantList" multiple onChange={handleFileChange} />
          </div>
          <div className="upload-input">
            <label className="field-label">Feedback:</label>
            <input type="file" name="feedback" multiple onChange={handleFileChange} accept=".pdf,.doc,.docx,.txt"/>
          </div>
          <button type="submit" className="upload-btn">Upload</button>
        </form>
      </div>
      
      {/* Toast Notification Component */}
      <ToastContainer />
    </div>
  );
};

export default UploadFile;
