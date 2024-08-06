// Hero.js
import React from 'react';


const Hero = () => {
  return (
    <div className="hero-container">
      <video 
        className="video-desktop" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/hero/heroLargeDevice.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video 
        className="video-mobile" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="hero/heroMobile.webm" type="video/mp4" />
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
