import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section id="aboutUs" className="section">
      <div className="container">

        <div className="section-title-box">
          <div className="section-icon"></div>
          <div className="section-title">ABOUT US</div>
          <div className="liner-box"></div>
        </div>

        {/* Main Intro */}
        <div className="about-page-content mt-4">
          <h2 className="mb-4">
            Building Reliable Structures with Precision & Transparency
          </h2>

          <p>
            Established in 2015, Shinde Consultants is an architectural,
            structural engineering, and construction firm based in Indore.
            Led by Akshay Shinde, we specialize in delivering complete
            residential, commercial, and industrial building solutions with
            a strong focus on structural safety, cost efficiency, and timely execution.
          </p>

          <p>
            From architectural planning and elevation design to structural
            detailing and turnkey construction, our team ensures every project
            is executed with professionalism, technical accuracy, and clear
            communication at every stage.
          </p>
        </div>

        {/* Mission / Approach */}
        <div className="about-page-content mt-5">
          <h3 className="mb-3">Our Approach</h3>
          <p>
            We believe that successful construction begins with proper planning.
            Our process starts with understanding client requirements, site
            conditions, and budget expectations. We then create detailed
            architectural layouts and structural designs before moving into
            seamless execution and supervision.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="about-page-content mt-5">
          <h3 className="mb-3">Why Choose Shinde Consultants</h3>

          <ul className="about-list">
            <li>✔ Transparent and straightforward pricing</li>
            <li>✔ Experienced in residential, commercial & industrial projects</li>
            <li>✔ Strong focus on structural stability and safety</li>
            <li>✔ Timely project completion with quality control</li>
            <li>✔ Responsive communication and professional service</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-5">
          <NavLink to="/contact" className="primary-button">
            Book Appointment
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default About;