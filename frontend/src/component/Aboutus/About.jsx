import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  const containerRef = useRef(null);

  const handleImageError = (e) => {
    e.target.src =
      'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" font-size="18" text-anchor="middle" alignment-baseline="middle" fill="%23666"%3EImage Loading...%3C/text%3E%3C/svg%3E';
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("section");
    const triggerBottom = window.innerHeight * 0.8;

    const checkVisibleSections = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("visible");
        }
      });
    };

    checkVisibleSections();
    window.addEventListener("scroll", checkVisibleSections);
    return () => window.removeEventListener("scroll", checkVisibleSections);
  }, []);

  return (
    <div className="about-wrapper" ref={containerRef}>
      {/* HERO */}
      <section className="about-hero cinematic-hero">
        <div className="hero-overlay"></div>
        <div className="hero-text fade-in">
          <h1 className="hero-title">About Us</h1>
          <h2 className="hero-subtitle">
            Capturing the Soul of Sri Lankan Love Stories
          </h2>
          <p className="hero-description">
            At <b>Ceylon Wedlock</b>, we believe every love story is unique, and
            every couple deserves a wedding album that reflects their journey,
            emotions, and cultural heritage.
          </p>
          <a href="#about-legacy" className="btn cinematic-btn">
            Discover Our Story
          </a>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* LEGACY */}
      <section id="about-legacy" className="about-section split-section">
        <div className="text-block">
          <h1>Capturing the Soul of Sri Lankan Love Stories</h1>
          <p>
            As a proud sub-brand of Wedlock International, Ceylon Wedlock is
            dedicated exclusively to celebrating Sri Lankan engagements,
            weddings, and love stories through timeless photography.
          </p>

          <h2>A Legacy of Love and Tradition</h2>
          <p>
            With years of experience in lifestyle photography, we’ve mastered
            the art of capturing emotions that transcend time. From Kandyan
            weddings to Tamil, Muslim, and Christian traditions—we document
            every detail with authenticity and artistry.
          </p>

          <h2>More Than Just Photography</h2>
          <p>
            Ceylon Wedlock isn’t just about images; it’s about preserving the
            magic of your day for generations. Every couple’s journey is
            different, and our albums reflect that individuality.
          </p>

          <Link to="/contact" className="btn secondary-btn">
            Get in Touch
          </Link>
        </div>
        <div className="image-block">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=687&q=80"
            alt="Legacy"
            onError={handleImageError}
          />
        </div>
      </section>

      {/* CELEBRATION */}
      <section className="about-section reverse-section">
        <div className="image-block">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1469&q=80"
            alt="Celebration"
            onError={handleImageError}
          />
        </div>
        <div className="text-block">
          <h1>Why Choose Ceylon Wedlock?</h1>

          <div className="feature">
            <i className="fas fa-camera feature-icon"></i>
            <div>
              <h2>Expertise in Cultural Wedding Photography</h2>
              <p>
                From Sinhala and Tamil to Muslim and Christian weddings, we
                ensure no special moment goes unnoticed.
              </p>
            </div>
          </div>

          <div className="feature">
            <i className="fas fa-map-marker-alt feature-icon"></i>
            <div>
              <h2>Breathtaking Locations</h2>
              <p>
                From golden beaches to misty hills, we bring your love story to
                life in Sri Lanka’s most stunning destinations.
              </p>
            </div>
          </div>

          <div className="feature">
            <i className="fas fa-heart feature-icon"></i>
            <div>
              <h2>Personalized Approach</h2>
              <p>
                We capture your unique love story with authenticity, ensuring
                your photos reflect real emotions.
              </p>
            </div>
          </div>

          <Link to="/contact" className="btn cinematic-btn">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta cinematic-cta">
        <div className="cta-overlay"></div>
        <div className="cta-text">
          <h2>Let Us Capture Your Wedding Journey</h2>
          <p>
            Connect with us to discuss your wedding photography needs,
            wherever in the world your celebration awaits.
          </p>
          <Link to="/contact" className="btn light-btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
