// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Desktop video */}
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
      
      {/* Mobile video */}
      <video 
        className="video-mobile" 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
      >
        <source src="/hero/heroMobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
