import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./GallerySection.css";

const couples = [
  {
    name: "Lahiru & Kawshi",
    description: "Beachside Wedding Ceremony",
    img: "/images/gallery/0000.jpg",
    link: "/lahirukawshi",
  },
  {
    name: "Chamika &  Nipuni",
    description: "Garden Wedding Celebration",
    img: "/images/gallery/1111.jpg",
    link: "/chamika-Nipuni",
  },
  {
    name: "Chamath & shashini",
    description: "Traditional Church Wedding",
    img: "/images/gallery/2222.jpg",
    link: "/chamthshashini",
  },
  {
    name: "Bashi & Dehemi",
    description: "Urban Rooftop Celebration",
    img: "/images/gallery/3333.jpg",
    link: "/bashiDehemi",
  },
];

// Animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const GallerySection = () => {
  
  return (
    <div className="gallery-section">
      {/* Header Animation */}
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2>Story Through Our Lens</h2>
        <p>Let us take you through some of our exclusive pieces of work.</p>
      </motion.div>

      {/* Couples Grid */}
      <div className="couples-grid">
        {couples.map((couple, index) => (
          <a href={couple.link} key={index} className="couple-card-link">
            <motion.div
              className="couple-card"
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="couple-img">
                <img src={couple.img} alt={couple.name} />
                <div
                  className="icon-circle"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Viewing gallery for ${couple.name}`);
                  }}
                >
                  <span className="arrow">&#8599;</span>
                </div>
                <div className="couple-info">
                  <h3>{couple.name}</h3>
                  <p>{couple.description}</p>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {/* Footer Button */}
      <motion.div
        className="gallery-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <a
          href="/portfolio"
          className="view-more"
        >
          View More <ChevronRight size={18} />
        </a>
      </motion.div>
    </div>
  );
};

export default GallerySection;
