import React, { useState } from 'react';
import './UploadFile.css';

const UploadFile = () => {
  const [formData, setFormData] = useState({
    date: '',
    image: [],
    report: [],
    feedback: [],
    participantList: [],
    invitation: [],
    circular: [],
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: Array.from(files), // Convert FileList to Array
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    formData.image.forEach((file) => {
      console.log('Selected Image File:', file.name);
    });
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <div className="form-fields">
          <form className="form-data" onSubmit={handleSubmit}>
            <h2 className="upload">Upload Form</h2>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                className="form-control"
                onChange={handleDateChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                accept="image/*"
                multiple 
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="report">Report</label>
              <input
                type="file"
                className="form-control"
                id="report"
                name="report"
                multiple 
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedback">Feedback</label>
              <input
                type="file"
                className="form-control"
                id="feedback"
                name="feedback"
                multiple 
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pl">Participant List</label>
              <input
                type="file"
                className="form-control"
                id="pl"
                name="participantList"
                multiple 
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="invitation">Invitation</label>
              <input
                type="file"
                className="form-control"
                id="invitation"
                name="invitation"
                multiple 
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="circular">Circular</label>
              <input
                type="file"
                className="form-control"
                id="circular"
                name="circular"
                multiple 
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" className="upload">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
