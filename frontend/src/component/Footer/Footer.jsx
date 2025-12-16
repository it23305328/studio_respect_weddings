import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand">
        <a href="/">
          <img src="images/hero/new.png" alt="studio Logo" className="footer-logo-img" />
        </a>
        <div className="footer-contact">
  <h4>Contact</h4>
  <p>
    <span className="icon phone" /> 
    <a href="tel:+94765770018">+94 76 577 0018</a>
  </p>
  <p>
    <span className="icon mail" /> 
    <a href="mailto:info@studiorespectweddings.com">info@studiorespectweddings.com</a>
  </p>
  <p>
    <span className="icon location" /> 
    <a href="https://www.google.com/maps?sca_esv=d39e7dff067d00e3&sxsrf=AE3TifOADLTqCm6UWZxXRtRcVh-TiJ4WTA:1760516889314&kgmid=/g/11q4m1cdm7&shndl=30&shem=lcuae,lscta3,uaasie,shrtsdl&kgs=de9db80dea1d4220&um=1&ie=UTF-8&fb=1&gl=lk&sa=X&geocode=KbPROmGaf-E6MVMILrk4OY9C&daddr=384/A+Elpitiya-Pituwala-Kahaduwa+Road,+Elpitiya+80400" target="_blank" rel="noopener noreferrer">Studio Respect Weddings, 384/A Pituwala Rd, Elpitiya.</a>
  </p>
</div>

<div className="footer-socials">
  <a href="https://www.facebook.com/share/15vR9VYCFG/?mibextid=wwXIfr" className="icon facebook" target="_blank" rel="noopener noreferrer" />
  <a href="https://www.instagram.com/studiorespectweddings?igsh=eGp0djgzemRraDBm&utm_source=qr" className="icon instagram" target="_blank" rel="noopener noreferrer" />
  <a href="http://wa.me/94765770018" className="icon whatsapp" target="_blank" rel="noopener noreferrer" />
  <a href="https://www.google.com/maps?sca_esv=d39e7dff067d00e3&sxsrf=AE3TifOADLTqCm6UWZxXRtRcVh-TiJ4WTA:1760516889314&kgmid=/g/11q4m1cdm7&shndl=30&shem=lcuae,lscta3,uaasie,shrtsdl&kgs=de9db80dea1d4220&um=1&ie=UTF-8&fb=1&gl=lk&sa=X&geocode=KbPROmGaf-E6MVMILrk4OY9C&daddr=384/A+Elpitiya-Pituwala-Kahaduwa+Road,+Elpitiya+80400" className="icon map-location" target="_blank" rel="noopener noreferrer" />
</div>

      </div>

      <div className="footer-links">
        <div className="link-section">
          <h4>Studio Respect Weddings</h4>
          <a href="/home">Home</a>
          <a href="/details">About Us</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/reviews">Reviews</a>
        </div>
        
        <div className="link-section">
          <h4>Useful Links</h4>
          <a href="/contact">Contact</a>
          <a href="/reserve">Reserve Now</a>
          
        </div>
      </div>

      
    </div>

    <div className="footer-bottom">
      <span>© 2025 Studio Respect Weddings. All Rights Reserved.</span>
      
    </div>
  </footer>
);

export default Footer;
