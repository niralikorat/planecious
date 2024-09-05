// Hero.js
import React from 'react';
import Navbar from '../navBar';


const Hero = () => {
  return (
    <div className="hero-container">
    {/* <Navbar/> */}
      <video 
        className="video-desktop" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      >
        <source src="/hero/heroLargeDevice.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video 
        className="video-mobile" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      >
        <source src="hero/heroMobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to sustainability starts here.</p>
      </div> */}
    </div>
  );
};

export default Hero;
