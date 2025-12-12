// Gallery.jsx
import React from "react";

const Gallery = () => {
  const images = [
    // cover image first
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1800&q=80",
    // grid images
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1485249241965-91cb2d0bd3f2?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80",
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

        /* give each item a fixed height so the grid looks uniform */
        .gallery-item {
          overflow: hidden;
          border-radius: 6px;
          height: 220px;
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
        }
        @media (max-width: 520px) {
          .cover { height: 240px; }
          .cover-text h2 { font-size: 24px; }
          .gallery-grid { grid-template-columns: 1fr; gap: 12px; padding: 0 10px; }
          .gallery-item { height: 200px; }
        }
      `}</style>

      {/* Cover section */}
      <div className="cover">
        <img src={images[0]} alt="cover" />
        <div className="cover-text">
          <h2>Ish &amp; Amil</h2>
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
