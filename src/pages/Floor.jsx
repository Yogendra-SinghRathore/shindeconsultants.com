import React from "react";
import { NavLink } from "react-router-dom";
import serviceImg3 from "../assets/images/Floor.jpg";


const Floor = () => {
  return (
    <section id="floor" className="section">
      <div className="container">

        <div className="section-title-box">
          <div className="section-icon"></div>
          <div className="section-title">Architectural Floor Planning</div>
          <div className="liner-box"></div>
        </div>

        {/* Introduction */}
        <div className="mt-4">

          <img className="servicePageImg img-fluid" src={serviceImg3} alt="FloorImg" />

          <h2 className="my-3">
            Smart & Functional Space Planning Solutions
          </h2>

          <p>
            Shinde Consultants provides professional floor planning services
            for residential, commercial, and industrial projects in Indore.
            We design practical layouts that optimize available space while
            ensuring proper ventilation, natural lighting, and smooth movement flow.
          </p>

          <p>
            Every floor plan is developed with structural feasibility,
            future expansion possibilities, and client requirements in mind,
            ensuring comfort, efficiency, and long-term usability.
          </p>
        </div>

        {/* Services Included */}
        <div className="mt-5">
          <h3 className="mb-3">Our Floor Planning Services Include</h3>

          <ul>
            <li>✔ Residential House Layout Planning</li>
            <li>✔ Duplex & Villa Floor Designs</li>
            <li>✔ Commercial Space Planning</li>
            <li>✔ Industrial Layout Structuring</li>
            <li>✔ Space Optimization & Area Utilization</li>
            <li>✔ Vastu-Based Planning (if required)</li>
          </ul>
        </div>

        {/* Pricing Section */}
        <div className="mt-5">
          <h3 className="mb-3">Estimated Pricing</h3>
          <p>
            Floor planning services starting from ₹25 per sq. ft.*
            Final cost depends on project type, complexity, and total built-up area.
          </p>
        </div>

        {/* Call To Action */}
        <div className="mt-5">
          <NavLink to="/contact" className="primary-button">
            Get a Floor Plan Consultation
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default Floor;