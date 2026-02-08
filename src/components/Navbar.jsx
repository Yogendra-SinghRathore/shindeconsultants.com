import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/images/mainLogo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("hero");

  const handleSectionNav = (id) => {
    setActiveSection(id);
    closeNavbar();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const closeNavbar = () => {
    if (window.innerWidth >= 992) return;

    const navbar = document.getElementById("navbarScroll");
    if (!navbar) return;

    const bsCollapse =
      window.bootstrap.Collapse.getInstance(navbar) ||
      new window.bootstrap.Collapse(navbar, { toggle: false });

    bsCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white navbar-light mb-3">
      <div className="container bg-white navbarBorder">
        {/* Logo */}
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
          onClick={() => handleSectionNav("hero")}
        >
          <img src={Logo} alt="brandLogo" />
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Content */}
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mx-auto my-2 my-lg-0">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeSection === "hero" ? "active" : ""
                  }`}
                onClick={() => handleSectionNav("hero")}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeSection === "about" ? "active" : ""
                  }`}
                onClick={() => handleSectionNav("about")}
              >
                About
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeSection === "service" ? "active" : ""
                  }`}
                onClick={() => handleSectionNav("service")}
              >
                Service
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeSection === "project" ? "active" : ""
                  }`}
                onClick={() => handleSectionNav("project")}
              >
                Project
              </button>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={() => {
                  setActiveSection(null);
                  closeNavbar();
                }}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >Contact</NavLink>
            </li>
          </ul>

          {/* Right CTA */}
          <div>
            <NavLink
              to="/contact"
              onClick={closeNavbar}
              className="primary-button navbarBtn"
            >
              Get A Quote
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
