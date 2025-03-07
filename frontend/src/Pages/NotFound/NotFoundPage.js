import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! The page you are looking for does not exist.</p>
      <button className="notfound-button" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
}

export default NotFoundPage;
