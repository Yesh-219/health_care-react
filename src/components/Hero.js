import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png'; // Importing the image

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }} // Inline background image
    >
      <div className="hero-content">
        <h1>Your Health, Our Priority</h1>
        <p>Expert care with a personal touch</p>
        <a href="#appointments" className="cta-button">Book an Appointment</a>
      </div>
    </section>
  );
};

export default Hero;
