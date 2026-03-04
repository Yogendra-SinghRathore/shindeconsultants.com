import React from "react";
import { NavLink } from "react-router-dom";
import serviceImg4 from "../assets/images/Furnitureimg.jpg";


const Interior = () => {
  return (
    <section id="interior" className="section">
      <div className="container">

        <div className="section-title-box">
          <div className="section-icon"></div>
          <div className="section-title">Interior Solutions</div>
          <div className="liner-box"></div>
        </div>

        {/* Introduction */}
        <div className="mt-4">

          <img className="servicePageImg img-fluid" src={serviceImg4} alt="InteriorImg" />

          <h2 className="my-3">
            Modern & Functional Interior Design Services
          </h2>

          <p>
            Shinde Consultants offers complete interior design and execution
            solutions for residential and commercial projects in Indore.
            We focus on creating spaces that reflect personality, comfort,
            and functionality while maintaining budget efficiency.
          </p>

          <p>
            Our team ensures proper space planning, material selection,
            lighting design, and finishing details to deliver interiors
            that are both visually appealing and practically efficient.
          </p>
        </div>

        {/* Services Included */}
        <div className="mt-5">
          <h3 className="mb-3">Our Interior Services Include</h3>

          <ul>
            <li>✔ Modular Kitchen Design</li>
            <li>✔ Living Room & Bedroom Interiors</li>
            <li>✔ False Ceiling & Lighting Design</li>
            <li>✔ Office & Commercial Interiors</li>
            <li>✔ Furniture Layout & Custom Design</li>
            <li>✔ Turnkey Interior Execution</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mt-5">
          <h3 className="mb-3">Why Choose Our Interior Solutions</h3>
          <p>
            We combine creative design with technical expertise to ensure
            quality workmanship, timely delivery, and long-lasting results.
            Every project is handled with attention to detail and client
            preferences to achieve complete satisfaction.
          </p>
        </div>

        {/* Call To Action */}
        <div className="mt-5">
          <NavLink to="/contact" className="primary-button">
            Discuss Your Interior Project
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default Interior;