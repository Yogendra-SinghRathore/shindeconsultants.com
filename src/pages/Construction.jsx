import React from "react";
import { NavLink } from "react-router-dom";
import serviceImg1 from "../assets/images/Residentialimg.jpg";


const Construction = () => {
  return (
    <section id="construction" className="section">
      <div className="container">

        <div className="section-title-box">
          <div className="section-icon"></div>
          <div className="section-title">Building Construction</div>
          <div className="liner-box"></div>
        </div>

        {/* Introduction */}
        <div className="mt-4">

          <img className="servicePageImg img-fluid" src={serviceImg1} alt="ConstructionImg" />

          <h2 className="my-3">
            Reliable Residential & Commercial Construction Services
          </h2>

          <p>
            Shinde Consultants delivers complete building construction solutions
            across Indore for residential homes, commercial buildings, and
            industrial projects. From foundation work to final finishing,
            we ensure structural strength, high-quality materials, and
            professional site supervision at every stage.
          </p>

          <p>
            Our approach combines technical expertise, transparent pricing,
            and strict quality control to ensure timely project completion
            without compromising safety or durability.
          </p>
        </div>

        {/* Services Included */}
        <div className="mt-5">
          <h3 className="mb-3">What We Offer</h3>

          <ul>
            <li>✔ Turnkey Residential Construction</li>
            <li>✔ Commercial Building Projects</li>
            <li>✔ Industrial & PEB Structures</li>
            <li>✔ RCC & Structural Framework Work</li>
            <li>✔ On-Site Supervision & Quality Assurance</li>
            <li>✔ Material Planning & Cost Management</li>
          </ul>
        </div>

        {/* Pricing Section */}
        <div className="mt-5">
          <h3 className="mb-3">Estimated Pricing</h3>
          <p>
            Construction services starting from ₹1,250 – ₹1,300 per sq. ft.*
            Final pricing depends on design specifications, material choices,
            and overall project scope.
          </p>
        </div>

        {/* Call To Action */}
        <div className="mt-5">
          <NavLink to="/contact" className="primary-button">
            Request a Construction Quote
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default Construction;