import React, { useState, useEffect, useRef } from "react";
import "./Services.css";

const servicesData = [
  { title: "Weddings", description: "Beautifully capturing your wedding memories." },
  { title: "Engagements", description: "Capturing the start of your journey together." },
  { title: "Pre Shoot", description: "Fun, relaxed photography for any occasion." },
];

const sliderImages = [
  "/images/sev/wed.jpg",
  "/images/sev/en.jpg",
  "/images/sev/pre.jpg",
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const headerRef = useRef(null);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
      setProgress(0);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate progress bar
  useEffect(() => {
    setProgress(0); // Reset progress when currentIndex changes
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 0.5));
    }, 20);
    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  // Intersection Observer to trigger header animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = headerRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { 
      if (currentRef) observer.unobserve(currentRef); 
    };
  }, []);

  const handleServiceClick = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const getFallbackImage = () => {
    return "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' alignment-baseline='middle' fill='%23fff'%3EImage Loading...%3C/text%3E%3C/svg%3E";
  };

  return (
    <section id="services-section">
      <h2
        id="services-header"
        ref={headerRef}
        className={headerVisible ? "animate" : ""}
      >
        Our <span id="services-highlight">Services</span>
      </h2>
      <p id="services-description">
        From the First Look to Forever, we offer a range of photography services designed to celebrate love in all its forms:
      </p>

      <div id="services-container">
        <div id="services-slider">
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`services-slide ${index === currentIndex ? "active" : ""}`}
              style={{ 
                backgroundImage: `url(${imageErrors[index] ? getFallbackImage() : img})` 
              }}
            >
              <img 
                src={img} 
                alt={`Service ${index + 1}`}
                style={{ display: 'none' }}
                onError={() => handleImageError(index)}
              />
            </div>
          ))}
        </div>

        <div id="services-list-wrapper">
          <div id="services-progress-bar-container">
            {servicesData.map((_, index) => (
              <div key={index} className="services-progress-sector">
                <div
                  className="services-progress-fill"
                  style={{
                    height:
                      index < currentIndex
                        ? "100%"
                        : index === currentIndex
                        ? `${progress}%`
                        : "0%",
                  }}
                ></div>
              </div>
            ))}
          </div>

          <div id="services-list">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`services-item ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleServiceClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceClick(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Select ${service.title} service`}
              >
                <h3>{service.title}</h3>
                {index === currentIndex && <p>{service.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
