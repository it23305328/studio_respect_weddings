// Gallery.jsx
import React from "react";

const Gallery = () => {
  const images = [
    // cover image first
    "/images/portfolio/12/lst.jpg",
    // grid images
    "/images/portfolio/12/DSC05801.jpg",
    "/images/portfolio/12/DSC05812.jpg",
    "/images/portfolio/12/DSC05819.jpg",
    "/images/portfolio/12/1.jpg",
    "/images/portfolio/12/DSC05871.jpg",
    "/images/portfolio/12/DSC05895.jpg",
    "/images/portfolio/12/DSC05943.jpg",
    "/images/portfolio/12/lst.jpg",
    "/images/portfolio/12/DSC05957.jpg",
    "/images/portfolio/12/DSC06119.jpg",
    
  ];

  return (
    <div className="gallery-root">
      <style>{`
        .gallery-root {
          background: #000;
          color: #fff;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        /* COVER */
        .cover {
          position: relative;
          width: 100%;
          height: 420px; /* adjust as needed */
          overflow: hidden;
        }
        .cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.55);
          transform-origin: center;
          transition: transform 10s linear;
        }
        .cover:hover img {
          transform: scale(1.03); /* gentle slow zoom on hover */
        }
        .cover-text {
          position: absolute;
          left: 50%;
          bottom: 36px;
          transform: translateX(-50%);
          text-align: center;
          pointer-events: none;
        }
        .cover-text h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 700;
          letter-spacing: 0.6px;
        }
        .cover-text .line {
          width: 72px;
          height: 3px;
          background: #fff;
          margin: 10px auto 0;
        }

        /* GRID */
        .gallery-grid {
          max-width: 1120px;
          margin: 18px auto 40px;
          padding: 0 12px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        /* give each item a fixed height for portrait images */
        .gallery-item {
          overflow: hidden;
          border-radius: 6px;
          height: 380px; /* increased for portrait aspect ratio */
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.06);
        }

        /* Responsive: 2 columns on medium screens, 1 column on small screens */
        @media (max-width: 900px) {
          .cover { height: 340px; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-item { height: 350px; }
        }
        @media (max-width: 520px) {
          .cover { height: 240px; }
          .cover-text h2 { font-size: 24px; }
          .gallery-grid { grid-template-columns: 1fr; gap: 12px; padding: 0 10px; }
          .gallery-item { height: 450px; } /* taller for portrait on mobile */
        }
      `}</style>

      {/* Cover section */}
      <div className="cover">
        <img src={images[0]} alt="cover" />
        <div className="cover-text">
          <h2>Dulaj &amp; Madushani</h2>
          <div className="line" />
        </div>
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {images.slice(1).map((src, i) => (
          <div className="gallery-item" key={i}>
            <img src={src} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
