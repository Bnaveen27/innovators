import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./Reports.css";
import colgeLogo from "../../Assets/Images/logo_small.png";

const Reports = () => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchDate, setSearchDate] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const fetchRecords = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_URL}/Routes/UploadRoutes/Pages/GetRecords`
      );
      setRecords(response.data.records);
    } catch (error) {
      console.error("Error fetching records:", error.message);
    } finally {
      setIsLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(
          `${API_URL}/Routes/UploadRoutes/Pages/DeleteRecord/${id}`
        );
        alert("Record deleted successfully");
        fetchRecords();
      } catch (error) {
        console.error("Error deleting record:", error.message);
        alert("Failed to delete record");
      }
    }
  };

  const handleDeleteFile = async (id, fileType, fileName) => {
    if (window.confirm(`Are you sure you want to delete this ${fileType.slice(0, -1)}?`)) {
      try {
        await axios.delete(
          `${API_URL}/Routes/UploadRoutes/Pages/DeleteFile/${id}/${fileType}/${fileName}`
        );
        alert(`${fileType.slice(0, -1)} deleted successfully`);
        fetchRecords();
      } catch (error) {
        console.error("Error deleting file:", error.message);
        alert("Failed to delete file");
      }
    }
  };

  const handleUpdate = async (id) => {
    const newDate = prompt("Enter a new date (YYYY-MM-DD):");
    if (newDate) {
      try {
        await axios.put(
          `${API_URL}/Routes/UploadRoutes/Pages/UpdateRecord/${id}`,
          { date: newDate }
        );
        alert("Record updated successfully");
        fetchRecords();
      } catch (error) {
        console.error("Error updating record:", error.message);
        alert("Failed to update record");
      }
    }
  };

  const handleDownloadReports = async (date) => {
    try {
      const response = await axios.get(
        `${API_URL}/Routes/UploadRoutes/Pages/DownloadRecords/${date}`,
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `records-${date}.zip`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading reports:", error.message);
      alert("Failed to download reports");
    }
  };

  const openFile = (fileName, type) => {
    const filePath = `${API_URL}/uploads/${type}/${fileName}`;
    window.open(filePath, "_blank");
  };

  const handleSearchDate = () => {
    if (searchDate) {
      const filteredRecords = records.filter((record) =>
        record.date.includes(searchDate)
      );
      setRecords(filteredRecords);
    } else {
      fetchRecords();
    }
  };

  const openPopup = (record) => {
    setSelectedRecord(record);
  };

  const closePopup = () => {
    setSelectedRecord(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="report-container">
      <div className="report-header">
        <header className="report-top">
          <img src={colgeLogo} alt="College-Logo" className="colge-image" />
          <div className="header-content">
            <p className="coll-tagline">Arul Anandar College(Autonomous)</p>
            <p className="place-tagline">Karumathur-Madurai</p>
          </div>
        </header>
      </div>
      <div className="reports-section">
        <div className="Report-head">
          <h2 className="report-title">Uploaded Records</h2>
          <div className="search-container">
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="search-input"
            />
            <button onClick={handleSearchDate} className="search-button">
              Search
            </button>
          </div>
        </div>
        {records.length === 0 ? (
          <p className="Record-alerts">No records found</p>
        ) : (
          <div className="records-list">
            {records.map((record) => (
              <div key={record._id} className="record-item">
                <div className="record-header">
                  <h3 className="record-date">{record.date}</h3>
                  <button className="toggle-btn" onClick={() => openPopup(record)}>
                    Show Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedRecord && (
        <div className="report-modal">
          <div className="pop-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <h3>Record Details - {selectedRecord.date}</h3>

            {["images", "reports", "feedbacks", "invitations", "circulars", "participantLists"].map(
              (fileType) => (
                <div key={fileType} className="record-section">
                  <strong>{fileType}:</strong>
                  {selectedRecord[fileType] && selectedRecord[fileType].length > 0 ? (
                    selectedRecord[fileType].map((file, index) => (
                      <div key={index} className="file-item">
                        <button onClick={() => openFile(file, fileType)} className="file-link">
                          View {fileType.slice(0, -1)} {index + 1}
                        </button>
                        <button
                          onClick={() => handleDeleteFile(selectedRecord._id, fileType, file)}
                          className="btn btn-delete-file"
                        >
                          Delete {fileType.slice(0, -1)}
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="Record-alerts">No {fileType} uploaded</p>
                  )}
                </div>
              )
            )}

            <div className="record-actions">
              <button onClick={() => handleUpdate(selectedRecord._id)} className="btn btn-update">
                Update
              </button>
              <button onClick={() => handleDelete(selectedRecord._id)} className="btn btn-delete">
                Delete Record
              </button>
              <button onClick={() => handleDownloadReports(selectedRecord.date)} className="btn btn-download">
                Download Reports
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
