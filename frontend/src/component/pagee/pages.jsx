import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./pg.module.css"; // ✅ CSS Modules import

export default function Page() {
  const wrapperRef = useRef(null);

  const handleImageError = (e) => {
    e.target.src =
      'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" font-size="18" text-anchor="middle" alignment-baseline="middle" fill="%23666"%3EImage Loading...%3C/text%3E%3C/svg%3E';
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const sections = wrapper.querySelectorAll("section");
    const triggerPoint = window.innerHeight * 0.8;

    const revealSections = () => {
      sections.forEach((block) => {
        const blockTop = block.getBoundingClientRect().top;
        if (blockTop < triggerPoint) {
          block.classList.add(styles.cwVisible); // ✅ use module class
        }
      });
    };

    revealSections();
    window.addEventListener("scroll", revealSections);
    return () => window.removeEventListener("scroll", revealSections);
  }, []);

  return (
    <div className={styles.cwPageWrapper} ref={wrapperRef}>
      {/* INTRO */}
      <section className={styles.cwIntroBanner}>
        <div className={styles.cwIntroOverlay}></div>
        <div className={styles.cwIntroText}>
          <h1>About Us</h1>
          <h2>Capturing the Soul of Sri Lankan Love Stories</h2>
          <p>
            At <b>Studio Respect Weddings</b>, we believe every love story is unique, and
            every couple deserves a wedding album that reflects their journey,
            emotions, and cultural heritage.
          </p>
          <a href="#cw-heritage-block" className={styles.cwBtn}>
            Discover Our Story
          </a>
        </div>
        <div className={styles.cwScrollCue}>↓</div>
      </section>

      {/* HERITAGE */}
      <section className={styles.cwHeritageBlock} id="cw-heritage-block">
        <div className={styles.cwHeritageContent}>
          <h1>Capturing the Soul of Sri Lankan Love Stories</h1>
          <p>
            As a proud sub-brand of Studio Respect Weddings, Studio Respect Weddings is
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
            Studio Respect Weddings isn’t just about images; it’s about preserving the
            magic of your day for generations. Every couple’s journey is
            different, and our albums reflect that individuality.
          </p>

          <Link to="/reserve" className={styles.cwBtn}>
            Get in Touch to Learn More

          </Link>
        </div>
        <div className={styles.cwHeritageImage}>
          <img
            src="/images/hero/1101.jpg"
            alt="Heritage"
            onError={handleImageError}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.cwFeaturesShowcase}>
        <div className={styles.cwFeaturesPhoto}>
          <img
            src="/images/hero/mn01.jpg"
            alt="Celebration"
            onError={handleImageError}
          />
        </div>
        <div className={styles.cwFeaturesDetails}>
          <h1>Why Choose Studio Respect Weddings?</h1>

          <div className={styles.cwFeatureItem}>
            <span className={styles.cwIconWrapper}>
              <i className="fas fa-camera"></i>
            </span>
            <div>
              <h2>Expertise in Cultural Wedding Photography</h2>
              <p>
                From Sinhala and Tamil to Muslim and Christian weddings, we
                ensure no special moment goes unnoticed.
              </p>
            </div>
          </div>

          <hr />

          <div className={styles.cwFeatureItem}>
            <span className={styles.cwIconWrapper}>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <div>
              <h2>Breathtaking Locations</h2>
              <p>
                From golden beaches to misty hills, we bring your love story to
                life in Sri Lanka’s most stunning destinations.
              </p>
            </div>
          </div>

          <hr />

          <div className={styles.cwFeatureItem}>
            <span className={styles.cwIconWrapper}>
              <i className="fas fa-heart"></i>
            </span>
            <div>
              <h2>Personalized Approach</h2>
              <p>
                We capture your unique love story with authenticity, ensuring
                your photos reflect real emotions.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* OUTRO */}
      <section className={styles.cwOutroCta}>
        <div className={styles.cwOutroOverlay}></div>
        <div className={styles.cwOutroContent}>
          <h2>Let Us Capture Your Wedding Journey</h2>
          <p>
            Connect with us to discuss your wedding photography needs, wherever
            in the world your celebration awaits.
          </p>
          <a href="/contact" className={styles.cwBtn}>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
