import React, { useState } from "react";
import "./Header.css";
import { v4 as uuidv4 } from "uuid";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/details" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Reviews", to: "/reviews" },
  { name: "Contact", to: "/contact" },
  { name: "Reserve Now", to: "/reserve" }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src="images/hero/new.png" alt="Studio Respect logo" />
          </a>
        </div>

        {/* Mobile Icons Wrapper */}
        <div className="mobile-icons">
          {/* Bookmark Icon (Mobile Only) */}
          <a href="/reserve" className="bookmark-icon" aria-label="Reserve Now">
            <i className="far fa-bookmark"></i>
          </a>

          {/* Hamburger Icon (Mobile Only) */}
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`main-navigation ${menuOpen ? "active" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={uuidv4()}>
                <a href={link.to}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
