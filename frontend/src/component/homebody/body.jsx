import React, { useState, useEffect, useRef } from 'react';
import './MCSS.css';

const PhotographyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  const images = [
    "/images/body/56.jpg",
    "/images/body/63.jpg",
    "/images/body/65.jpg",
  ];

  // Image slider (auto change)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll-triggered animation (multiple times)
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('mounted');
            setIsVisible(true); // Trigger animation
          } else {
            section.classList.remove('mounted');
            setIsVisible(false); // Reset animation
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% visible
      }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      className="photography-container"
      id="ceylon-wedlock-homepage"
      ref={sectionRef}
    >
      <div className="hero-section" id="main-hero-section">
        {/* Text Section */}
        <div className="content" id="text-content-area">
          <h1 id="photography-heading">
            <span
              id="title-line-1"
              className={`title-line ${isVisible ? 'animate-line-1' : ''}`}
            >
              Photography Inspired by
            </span>
            <span
              id="title-highlight"
              className={`title-highlight ${isVisible ? 'animate-highlight' : ''}`}
            >
              Sri Lankan Beauty
            </span>
            <span
              id="title-line-2"
              className={`title-line ${isVisible ? 'animate-line-2' : ''}`}
            >
              and Tradition
            </span>
          </h1>

          <br id="heading-spacer" />

          <p
            id="description-paragraph"
            className={isVisible ? 'animate-description' : ''}
          >
            <span id="brand-name" className="brand-highlight">
              Studio Respect Weddings
            </span>{' '}
            a distinguished sub-brand of Studio Respect Weddings, is dedicated
            to capturing the soul of Sri Lankan love stories. We blend cultural
            insight with creative storytelling to turn your moments into
            timeless memories. Whether it’s sun-kissed beaches or historic
            landmarks, we know the perfect settings to make your photographs
            unforgettable.
          </p>

          <a
            href="/details"
            className={`btn ${isVisible ? 'animate-button' : ''}`}
            id="read-more-button"
          >
            Read More →
          </a>
        </div>

        {/* Image Slider */}
        <div className="image-container" id="photo-gallery-container">
          <div
            className={`image-slider ${isVisible ? 'animate-slider' : ''}`}
            id="main-image-slider"
          >
            {images.map((image, index) => (
              <div
                key={index}
                id={`slide-${index}`}
                className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}

            {/* Navigation Dots */}
            <div className="slider-controls" id="slider-navigation">
              {images.map((_, index) => (
                <button
                  key={index}
                  id={`slider-dot-${index}`}
                  className={`slider-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyPage;
