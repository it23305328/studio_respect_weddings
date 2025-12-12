import React, { useState, useEffect } from "react";
import "./hime.css";
import Gallery from "../gallery/GallerySection";
import Body from "../homebody/body";
import Sev from "../Servicese/ServicesSection";

const images = [
  "/images/hero/33333.jpg",//  "/images/sev/wed.jpg",
  "/images/hero/22222.jpg",
  "/images/hero/11111.jpg",
];

export default function HeroSliderStableText() {
  const [current, setCurrent] = useState(0);

  // Automatic transition every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="hero-slider-wrapper" className="hero-wrapper">
        <div id="hero-slider-container" className="hero-container">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          <div id="hero-overlay" className="overlay" />

          <div id="hero-text-content" className="hero-text">
            <h1 id="hero-main-heading">
              Celebrate Your Love with <br />
              <span id="hero-highlight-text">Stunning Photography</span>
            </h1>
            <p id="hero-description">
              At Studio Respect Weddings, we specialize in capturing the magical moments
              of your Sri Lankan wedding engagements and casual shoots.
              Whether it's a romantic pre-wedding session, a cultural engagement ceremony,
              or a candid celebration, we bring artistry and heart to every shot.
            </p>
            <div id="hero-buttons-container" className="buttons">
              <button id="book-now-btn" onClick={() => window.location.href = "/reserve"}>
                Book Now
              </button>
              <button id="portfolio-btn" onClick={() => window.location.href = "/portfolio"}>
                Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      <Body />
      <Sev />
      <Gallery />
    </>
  );
}
