import React from "react";
import { NavLink } from "react-router-dom";
import serviceImg2 from "../assets/images/Commercialimg.jpg";


const Elevation = () => {
  return (
    <section id="elevation" className="section">
      <div className="container">

        <div className="section-title-box">
          <div className="section-icon"></div>
          <div className="section-title">Architectural & Elevation Design</div>
          <div className="liner-box"></div>
        </div>

        {/* Introduction */}
        <div className="mt-4">

          <img className="servicePageImg img-fluid" src={serviceImg2} alt="ElevationImg" />

          <h2 className="my-3">
            Modern Architectural Planning & Elevation Solutions
          </h2>

          <p>
            Shinde Consultants provides professional architectural design and
            elevation planning services for residential, commercial, and
            industrial projects in Indore. We create functional layouts and
            visually appealing building exteriors that enhance property value
            while maintaining structural practicality.
          </p>

          <p>
            Our designs balance aesthetics with ventilation, lighting,
            space optimization, and long-term durability, ensuring your
            project is both attractive and technically sound.
          </p>
        </div>

        {/* Services Included */}
        <div className="mt-5">
          <h3 className="mb-3">Our Architectural Services Include</h3>

          <ul>
            <li>✔ Residential Villa & Duplex Design</li>
            <li>✔ Commercial Building Layouts</li>
            <li>✔ Modern Elevation Design</li>
            <li>✔ Floor Planning & Space Optimization</li>
            <li>✔ 2D & 3D Design Visualization</li>
            <li>✔ Municipal Drawing Preparation</li>
          </ul>
        </div>

        {/* Pricing Section */}
        <div className="mt-5">
          <h3 className="mb-3">Estimated Pricing</h3>
          <p>
            Architectural and elevation design services starting from ₹25 per sq. ft.*
            Final pricing depends on project type, design complexity, and total area.
          </p>
        </div>

        {/* Call To Action */}
        <div className="mt-5">
          <NavLink to="/contact" className="primary-button">
            Request Architectural Consultation
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default Elevation;