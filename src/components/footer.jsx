import React from "react";

export default function Footer(props) {
 return (
  <footer className="footer">
  <div className="footer__content">
   <div className="footer__title">
    <img className="footer__logo" src="/public/images/icons/centro-website-logo.png"/>
    <p>JOB SERVICES</p>
   </div>
   <div className="footer__menu">
    <h3>Pages</h3>
    <nav>
     <a href="/">Home</a>
     <a href="/pricing">Pricing</a>
     <a href="/register">Register</a>
     <a href="/account">My Account</a>
    </nav>
   </div>
   <div className="footer__menu">
    <h3>Our Services</h3>
    <nav>
     <p>Applicant Profile Review</p>
     <p>Resume and Cover Letter Optimization</p>
     <p>Job Application Tailoring</p>
     <p>Virtual Job Application</p>
    </nav>
   </div>
   <div className="footer__menu">
    <h3>More</h3>
    <nav>
     <a href="/terms-of-service">Terms of Service</a>
     <a href="/privacy-policy">Privacy Policy</a>
     <a href="/cookie-policy">Cookie Policy</a>
    </nav>
   </div>
   <div className="footer__menu">
    <h3>Contact</h3>
    <nav>
     <a href="">admin@crcentro.com</a>
     <a href="">(+506) 7063-8994</a>
    </nav>
   </div>
   </div>
   <div className="footer__copyright">
     © 2025 Copyright Centro, All rights reserved.
   </div>
  </footer>
 );
}
