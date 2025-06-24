import React, { useState, useEffect } from "react";
import "./Work.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Topbar from "./Topbar"; // assuming it's in the same folder

const Work = () => {
  // Cursor logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
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
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      {/* HEADER + CUSTOM CURSOR */}
      <div className="hero">
        <nav onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <Topbar />
        </nav>

        {/* WORK SECTION */}
        <div
          className="work-carousel-container"
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
            <div className="work-card bg-black">
              <h2 className="work-title">Project 1</h2>
              <p className="work-description">
                The project is a React Native application...
              </p>
            </div>
            <div className="work-card bg-black">
              <h2 className="work-title">Project 2</h2>
              <p className="work-description">
                The project is a backend application...
              </p>
            </div>
            <div className="work-card bg-black">
              <h2 className="work-title">Project 3</h2>
              <p className="work-description">
                The project is a data-driven application...
              </p>
            </div>
            <div className="work-card bg-black">
              <h2 className="work-title">Project 4</h2>
              <p className="work-description">
                The project is a React Native mobile application...
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

export default Work;
