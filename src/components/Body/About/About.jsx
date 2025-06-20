import React from 'react';
import './About.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

const About = () => {
  return (
    <div className="about-carousel-container">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
      >
        <div className="about-card bg-black">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I am a passionate developer with experience in front-end and back-end technologies.
          </p>
        </div>
        <div className="about-card bg-black">
          <h2 className="about-title">My Journey</h2>
          <p className="about-text">
            I started coding in college and quickly fell in love with software development. Since then, I have worked on several projects, focusing on building intuitive and user-friendly applications.
          </p>
        </div>
        <div className="about-card bg-black">
          <h2 className="about-title">My Vision</h2>
          <p className="about-text">
            My goal is to continuously learn new technologies and contribute to the tech community by creating innovative solutions.
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default About;
