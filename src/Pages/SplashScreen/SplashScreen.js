import React from 'react';
import logo from '../../Assets/Images/logo_small.png'
import './SplashScreen.css'; 

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt='logo'/>
      <h1>Welcome to AIC Web Portal</h1>
    </div>
  );
};

export default SplashScreen;