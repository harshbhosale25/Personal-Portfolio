import React from "react";
import "./Work.css"; // Import your CSS file for styling
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles


const Work = () => {
  return (
    
    <div className="work-carousel-container">
       
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
            The project is a React Native application designed to offer a
            seamless user experience for e-commerce functionality. It includes
            key features such as product browsing, category filtering, cart
            management, and checkout. The app utilizes various reusable
            components and state management techniques to ensure optimal
            performance and scalability
          </p>
        </div>
        <div className="work-card bg-black">
          <h2 className="work-title">Project 2</h2>
          <p className="work-description">
            The project is a backend application built using Express and
            Node.js, designed to provide RESTful APIs for a web and mobile
            application. It serves as the backbone of the system, managing data
            flow between the frontend and a database. The application handles
            essential functionality like user authentication, product
            management, cart operations, and order processing.
          </p>
        </div>
        <div className="work-card bg-black">
          <h2 className="work-title">Project 3</h2>
          <p className="work-description">
            The project is a data-driven application built with MongoDB as the
            primary database. It is designed to handle large-scale,
            unstructured, or semi-structured data effectively, enabling
            efficient data storage, retrieval, and management. The application
            supports functionalities such as user management, product
            cataloging, and real-time data operations.
          </p>
        </div>
        <div className="work-card bg-black">
          <h2 className="work-title">Project 4</h2>
          <p className="work-description">
            The project is a React Native mobile application designed to provide
            a user-friendly interface and cross-platform compatibility. It
            focuses on delivering a seamless experience for functionalities such
            as browsing, user interaction, data display, and integration with
            backend APIs
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Work;
