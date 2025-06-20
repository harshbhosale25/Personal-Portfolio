import React from 'react';
import './Skills.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

const Skills = () => {
  return (
    <div className="skills-carousel-container">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
      >
        <div className="skill-card bg-black">
          <h2 className="skill-title">Front End</h2>
          <p className="skill-list">
            HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap, Redux/Redux Toolkit, React Native
          </p>
        </div>
        <div className="skill-card bg-black">
          <h2 className="skill-title">Back End</h2>
          <p className="skill-list">
            Node.js, Express.js, MongoDB
          </p>
        </div>
        <div className="skill-card bg-black">
          <h2 className="skill-title">Tools & Services</h2>
          <p className="skill-list">
            Android Studio, Figma, GitHub/GitLab, VS Code, Jira, Firebase (Authentication, Cloud Storage)
          </p>
        </div>
        <div className="skill-card bg-black">
          <h2 className="skill-title">Soft Skills</h2>
          <p className="skill-list">
            Problem-Solving, Leadership, Communication, Teamwork, Time Management
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Skills;
