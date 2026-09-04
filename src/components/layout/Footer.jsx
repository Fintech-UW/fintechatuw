import React from "react";
import { Link } from "react-router-dom";
import "./footer_styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inside">
        <p id="text"><Link to="/team">The Team</Link></p>
        <p id="text"><Link to="/about">Our Mission</Link></p>
        <p id="text-padding-bottom"><Link to="/resources">Resources</Link></p>
      </div>
      <div className="footer-inside-right">
        <p id="text-club-name"><Link to="/"><strong>FinTech@UW</strong></Link></p>
        <p id="text-email">
          Email: <a href="mailto:fintechuwmadison@outlook.com"><u>fintechuwmadison@outlook.com</u></a>
        </p>
        <p id="text">
          <span className="location-text">Madison, Wisconsin 53706</span>
          <span className="logo-container">
            <a href="https://www.linkedin.com/company/fintech-uw/" target="_blank" rel="noopener noreferrer">
              <img src="/socials-images/linkedin.png" id="linkedin-logo" alt="FinTech@UW on LinkedIn" />
            </a>
            <a href="https://www.instagram.com/fintechuw/" target="_blank" rel="noopener noreferrer">
              <img src="/socials-images/instagram.png" id="instagram-logo" alt="FinTech@UW on Instagram" />
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
