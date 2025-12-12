import React, { useState } from "react";
import "./Portfolio.css";


const couples = [
  {
    name: "Lahiru & Kawshi",
    description: "Traditional Wedding",
    img: "/images/portfolio/1/01.jpg",
    link: "/lahirukawshi",
    category: 'Wedding',
  },
  {
    name: "Tharindu & Nilmi",
    description: "Glamorous Weddings Celebration",
    img: "/images/portfolio/11/10.jpg",
    link: "/tharindunilmi",
    category: 'Wedding',
  },
  {
    name: "Bashi & Dehemi",
    description: "Garden Wedding Celebration",
    img: "/images/portfolio/4/01.jpg",
    link: "/bashiDehemi",
    category: 'Engagement',
  },
  {
    name: "Wenura & Kawshya",
    description: "Boho Celebration Shoot",
    img: "/images/portfolio/6/01.jpg",
    link: "/wenurakawshya",
    category: 'Pre-Shoot',
  },
  {
    name: "Chamika & Nipuni",
    description: "Traditional Wedding",
    img: "/images/portfolio/2/011.jpg",
    link: "/chamika-Nipuni",
    category: 'Wedding',
  },
  {
    name: "Eneesha & Rasandu",
    description: "Traditional Wedding",
    img: "/images/portfolio/5/01.jpg",
    link: "/nilame",
    category: 'Wedding',
  },
  {
    name: "Kushan & Chamini",
    description: "Pre Shoot Moment",
    img: "/images/portfolio/9/01.jpg",
    link: "/kushanchamini",
    category: 'Pre-Shoot',
  },
  {
    name: "Chamath & Shashini",
    description: "Glamorous Weddings Celebration",
    img: "/images/portfolio/3/01.jpg",
    link: "/chamthshashini",
    category: 'Wedding',
  },
  {
    name: "Supun & Akeesha",
    description: "Pre Shoot Moment",
    img: "/images/portfolio/13/1.jpg",
    link: "/supunakesha",
    category: 'Pre-Shoot',
  },
  {
    name: "Chami Anniversary",
    description: "Garden Wedding Celebration",
    img: "/images/portfolio/7/01.jpg",
    link: "/noname",
    category: 'Wedding',
  },
  {
    name: "Sachintha & Chami",
    description: "Pre Shoot Moment",
    img: "/images/portfolio/14/01.jpg",
    link: "/Sachinthachami",
    category: 'Pre-Shoot',
  },
  {
    name: "Chamika & Nipuni",
    description: "Pre Shoot Moment",
    img: "/images/portfolio/16/1.jpg",
    link: "/nipunichamika",
    category: 'Pre-Shoot',
  },
  
  {
    name: "Kavindu & Rukshi",
    description: "Glamorous Weddings Celebration",
    img: "/images/portfolio/10/55.jpg",
    link: "/kavindurukshi",
    category: 'Wedding',
  },
  {
    name: "Dinuru & Niduli",
    description: "Garden Wedding Celebration",
    img: "/images/portfolio/8/01.jpg",
    link: "/dinuruNiduli",
    category: 'Engagement',
  },
  {
    name: "Chamath & Shashini",
    description: "Beachside Wedding Ceremony",
    img: "/images/portfolio/17/_0.jpg",
    link: "/shashinichamath",
    category: 'Pre-Shoot',
  },
  {
    name: "Bride Shoot",
    description: "Bridal Shoot Moment",
    img: "/images/portfolio/15/01.jpg",
    link: "/bride",
    category: 'Pre-Shoot',
  },
  {
    name: "Dulaj & Madushani",
    description: "Beachside Wedding Ceremony",
    img: "/images/portfolio/12/01.jpg",
    link: "/dulaj",
    category: 'Wedding',
  },
];


const Portfolio = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleGalleryClick = (coupleName, e) => {
    e.stopPropagation();
    alert(`Viewing gallery for ${coupleName}`);
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const getFallbackImage = () => {
    return "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' alignment-baseline='middle' fill='%23666'%3EImage Loading...%3C/text%3E%3C/svg%3E";
  };

  const categories = ['All', 'Wedding', 'Engagement', 'Pre-Shoot'];
  const filteredCouples = selectedCategory === 'All' ? couples : couples.filter(c => c.category === selectedCategory);

  return (
    <section id="portfolio-section">
      <div className="section-title">
        <h2>Our Beautiful Couples</h2>
      </div>

      {/* Filter controls */}
      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="couples-grid">
        {filteredCouples.map((couple, index) => (
          <a href={couple.link} key={index} className="couple-card">
            <div className="couple-img">
              <img 
                src={imageErrors[index] ? getFallbackImage() : couple.img} 
                alt={couple.name}
                onError={() => handleImageError(index)}
              />
              <div 
                className="icon-circle"
                onClick={(e) => handleGalleryClick(couple.name, e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleGalleryClick(couple.name, e);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View gallery for ${couple.name}`}
              >
                <span className="arrow">&#8599;</span>
              </div>
              <div className="couple-info">
                <h3>{couple.name}</h3>
                <p>{couple.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="results-count">
        <p>Showing {filteredCouples.length} of {couples.length}</p>
      </div>
    </section>
  );
};

export default Portfolio;
