import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Intro.css";
import Topbar from "./Topbar";
function Intro() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
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
      <div className="hero">
        <nav onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <Topbar />
        </nav>
        <div className="title">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="main_content"
          >
            <span>Hi, My Name Is</span>
            <br />
            <span className="Harshad">
              <img
                src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjo2MCwidyI6MTI1MCwiZnMiOjQ4LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SEFSU0hBRCBCSE9TQUxF/madrigal.png
"
                alt=""
              />
            </span>
            <br />
            <div className="anination">
              <h3>
                <>I'm</>
                <div class="message">
                  <div class="word1">MERN Stack Developer</div>
                  <div class="word3">Back End Devloper</div>
                  <div class="word2">Front End Devloper</div>

                  {/* <div class="word4">Web Devloper</div> */}
                </div>
              </h3>
            </div>
            <span className="name2">I build things for the web.</span> <br />
            <p>
              I am from  Pune, Maharashtra based Experience Software developer. Eager to
              tackle web development/design challenges. <br />
              I have a serious passion for UI effects, animations and creating
              intuitive, dynamic user experiences.
              <br />
              Interested in the entire frontend and backend spectrum and working on
              ambitious projects with positive people.
            </p>
          </div>
          <div className="myDIV">
            About Me
            <hr />
          </div>
          <div class="hide">
            <div className="about">
              <span>
                <img
                  src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjo0OSwidyI6MTI1MCwiZnMiOjM5LCJmZ2MiOiIjRkFGNUY1IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QWJvdXQgTWU/madrigal.png"
                  alt=""
                />
              </span>
              <hr />
              <div className="info-text">
                Hello! My name is Harshad and I enjoy creating things that
                live on the internet. <br />
                <br /> I am From Pune and i am a Software developer. I Am a certified MERN
                Stack Developer. <br />
                <br /> Eager to tackle web development/design challenges to
                achieve lasting impacts on user experience. <br />
                <br />
                
              </div>
            </div>
          </div>
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          />
        </div>
        <div className="movingbox">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>
        <div className="contact">
          <ul>
          <li>
              <a href="https://www.instagram.com/harshbhosale_96k/?igsh=bGRpOWk5MGlwZGQ5#" target="blank">
              <img src="https://img.icons8.com/doodle/30/000000/instagram-new.png" alt=""/>
              </a>
            </li> 
            <li>
            <a href="https://github.com/harshbhosale25" target="blank">
              <img src="https://img.icons8.com/doodle/48/000000/github--v1.png" alt=""  />
              </a>
            </li>
            <li>
            <a href="https://www.facebook.com/harshad.bhosale.9237/" target="blank">
              <img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" alt=""/>
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Intro;