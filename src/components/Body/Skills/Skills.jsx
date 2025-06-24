import React, { useState, useEffect } from 'react';
import './Skills.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion'; 
import Topbar from '../Topbar';

const Skills = () => {
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <>
      <div className="hero">
        <nav onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <Topbar />
        </nav>

        <div
          className="skills-carousel-container"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
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

        {/* Custom Cursor */}
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
    </>
  );
};

export default Skills;
