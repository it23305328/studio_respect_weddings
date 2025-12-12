import React, { useEffect, useRef } from "react";
import "./mcs.css";

export default function Man() {
  const containerRef = useRef(null);

 // Fade-in sections on scroll using IntersectionObserver
useEffect(() => {
  const container = containerRef.current;
  const sections = container.querySelectorAll("section");

  const observerOptions = {
    threshold: 0.15, // trigger when 15% of section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // fade-in once and stop observing
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


  return (
    <div className="main-container" ref={containerRef}>
      {/* Hero Section */}
      <section className="hero" id="about-hero">
        <div className="overlay"></div>
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="hero-text">
          <h1>About us</h1>
          <h2>Capturing the Soul of Sri Lankan Love Stories</h2>
          <p>
            At <b>Ceylon Wedlock</b>, we believe that every love story is unique,
            and every couple deserves a wedding album that reflects their journey,
            emotions, and cultural heritage.
          </p>
          <a href="#about-legacy" className="btn">Discover Our Story</a>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="legacy" id="about-legacy">
        <div className="content">
          <h1>Capturing the Soul of Sri Lankan Love Stories</h1>
          <p>
            At Ceylon Wedlock, we believe that every love story is unique, and every
            couple deserves a wedding album that reflects their journey, emotions, and cultural heritage.
            As a proud sub-brand of Wedlock International, Ceylon Wedlock is dedicated exclusively
            to celebrating Sri Lankan engagements, weddings, and love stories through timeless photography.
          </p>
          <h2>A Legacy of Love and Tradition</h2>
          <p>
            With years of experience in wedding and lifestyle photography, we have
            mastered the art of capturing emotions that transcend time. Sri Lanka's
            rich traditions, breathtaking landscapes, and warm hospitality serve as
            the perfect canvas for our work. Whether it's the sacred rituals of a Kandyan
            wedding, the elegance of a Muslim Nikah ceremony, or the vibrant colors of
            a Hindu Tamil wedding, we understand the significance of every moment.
            Our goal is to document these details with authenticity and artistic finesse.
          </p>
          <h2>More Than Just Photography—A Celebration of Love</h2>
          <p>
            Ceylon Wedlock isn't just about capturing images; it's about preserving
            the magic of your wedding day for generations to come. Every couple's
            journey is different, and we take pride in reflecting that in our work.
            Our passion for storytelling, combined with an eye for detail and deep
            respect for Sri Lankan traditions, allows us to create wedding albums
            that feel personal, emotional, and timeless.
          </p>
          <a href="#about-contact" className="btn">Get in Touch to Learn More</a>
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
            alt="Legacy"
          />
        </div>
      </section>

      {/* Celebration Section */}
      <section className="celebration" id="about-celebration">
        <div className="celebration-image">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
            alt="Wedding Celebration"
          />
        </div>
        <div className="celebration-text">
          <h1>Why Choose Ceylon Wedlock?</h1>
          <h2>
            <span className="feature-icon"><i className="fas fa-camera"></i></span>
            Expertise in Cultural Wedding Photography
          </h2>
          <p>
            Every Sri Lankan wedding is unique, filled with rituals, emotions, and
            intricate details. Our team is well-versed in the traditions of Sinhala,
            Tamil, Muslim, and Christian weddings, ensuring that no special moment goes unnoticed.
          </p>
          <hr />
          <h2>
            <span className="feature-icon"><i className="fas fa-map-marker-alt"></i></span>
            Breathtaking Locations for Your Love Story
          </h2>
          <p>
            From the golden beaches of Unawatuna and Mirissa to the misty hills of
            Nuwara Eliya and Ella, Sri Lanka is home to some of the most picturesque
            destinations for pre-wedding and wedding photography. Whether you dream
            of a heritage shoot in Galle Fort, a romantic sunset moment in Sigiriya,
            or an intimate forest elopement in Kandy, we bring your vision to life.
          </p>
          <hr />
          <h2>
            <span className="feature-icon"><i className="fas fa-heart"></i></span>
            Personalized Approach to Your Special Day
          </h2>
          <p>
            We take time to understand your unique love story and vision, ensuring
            that our photography reflects your personality and captures the authentic
            emotions of your celebration.
          </p>
          <a href="#about-contact" className="btn">Get in Touch to Learn More</a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta" id="about-contact">
        <div className="cta-overlay"></div>
        <div className="cta-text">
          <h2>Let Us Capture Your Wedding Journey</h2>
          <p>
            Connect with us to discuss your wedding photography needs,
            wherever in the world your celebration awaits.
          </p>
          <a href="#about-contact" className="btn">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
