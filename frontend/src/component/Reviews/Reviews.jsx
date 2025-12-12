import React from "react";
import "./Reviews.css";

const reviewsData = [
  
  {
    name: "Madushan Nilanka",
    text: "I had the pleasure of working with an amazing photographer recently. Their attention to detail and creative vision truly made the photoshoot an exceptional experience. Not only did they capture stunning moments....,", 
    img: "/images/rew/1.jpg",
    bg: "/images/rew/1.jpg",
    link: "/madushan",
    rating: 5.0
  },
  {
    name: "Rahal Alwis",
    text: "First of all, a HUGE THANK YOU to the best team ever! 💕You made my most memorable day absolutely magical! ✨I’d never done a bridal shoot before — though I’ve been called for many — because I always thought the first time ...",
    img: "/images/rew/300.jpg",
    bg: "/images/rew/300.jpg",
    link: "/rahal",
    rating: 5
  },
  {
    name: "Thimasha Janani",
    text: "You’re such a talented photographer pathum malli and we’re thrilled with the results🥺❤️ Your friendly and calm manner gave us confidence from the start ❤️😘 You also offered excellent services, and we’ll  recommend you to others...",
    img: "/images/rew/3.jpg",
    bg: "/images/rew/3.jpg",
    link: "/thimasha",
    rating: 4.5
  },
  {
    name: "Ravindu Sëwwãntha",
    text: "We had Studio Respect Photography capture our wedding, and honestly, we couldn’t be happier with how everything turned out! Pathum and his team were amazing from start to finish; super friendly, easy to talk to, and so flexible with everything we needed....",
    img: "/images/rew/5.jpg",
    bg: "/images/rew/5.jpg",
    link: "/ravindu",
    rating: 5
  },
  {
    name: "Dedunu Shenaya",
    text: "We had the pleasure of having Studio respect crew,  capture our wedding, and we couldn’t have asked for a better experience. From start to finish, Pathum was incredibly smooth and flexible, making the entire process stress-free and enjoyable....",
    img: "/images/rew/7.jpg",
    bg: "/images/rew/7.jpg",
    link: "/dedunu",
    rating: 4.8
  },
  {
    name: "Dinupa Shehan",
    text: "We’re endlessly grateful for the phenomenal job you did capturing every magical moment from our wedding day to our getaway shoot. Each photograph radiates your unmatched creativity, passion, and eye for detail — turning our memories into timeless works of art...",
    img: "/images/rew/10.jpg",
    bg: "/images/rew/10.jpg",
    link: "/dinupa",
    rating: 4.8
  },
  {
    name: "Kawshi Perera",
    text: "We can’t thank you enough for turning our dream wedding album into a breathtaking reality. From the very beginning, we had a vision of how we wanted our memories to look — and today, that dream has come to life,,  💫...",
    img: "/images/rew/11.jpg",
    bg: "/images/rew/11.jpg",
    link: "/kawshi",
    rating: 4.6
  },
  {
    name: "Malith Chanuka",
    text: "Studio Respect Weddings, led by the incredibly talented Pathum Maduranga, made our wedding day and pre-shoot truly unforgettable! ✨Pathum and his amazing team went above and beyond....",
    img: "/images/rew/13.jpg",
    bg: "/images/rew/13.jpg",
    link: "/malith",
    rating: 4.5
  },
  {
    name: "Sachintha Hewawasam",
    text: "I just received my wedding album today, and it’s nothing short of a masterpiece by Studio Respect Weddings! 💕Pathum, the creative heart behind Studio Respect, has always been one of the most humble and down-to-earth people I know.....",
    img: "/images/rew/15.jpg",
    bg: "/images/rew/15.jpg",
    link: "/sachintha",
    rating: 5
  },
  {
    name: "Hashara Mudalige",
    text: "Wow — we are absolutely in love with the photographs you captured from our special day! 💕 Every image is filled with emotion and beauty, and looking through them truly made us feel like we were reliving every precious moment all over again....",
    img: "/images/rew/17.jpg",
    bg: "/images/rew/17.jpg",
    link: "/hashara",
    rating: 4.8
  },
  {
    name: "Amasha Savindi",
    text: "Working with you was such an enjoyable and unforgettable experience! 💕As a photographer, you had the amazing ability to bring our vision to life so naturally and effortlessly — never intrusive, always authentic. Every moment felt comfortable,❤️...",
     img: "/images/rew/19.jpg",
    bg: "/images/rew/19.jpg",
    link: "/amasha",
    rating: 4.7
  },
  {
    name: "Gayani Kaushani",
    text: "Choosing Studio Respect Weddings was truly one of the best decisions we made during our wedding planning! 💕A huge thank you to Pathum malli and the entire Studio Respect crew for the incredible work you did. Every capture is so natural, full of emotion....",
     img: "/images/rew/21.jpg",
    bg: "/images/rew/21.jpg",
    link: "/gayani",
    rating: 4.9
  },
  {
    name: "Nalaka Ndj",
    text: "I’ve been following Studio Respect Weddings on Instagram for years, always admiring their stunning and professional photography work. So, when it came time to plan our own wedding, they were the very first team that came to mind...",
    img: "/images/rew/25.jpg",
    bg: "/images/rew/25.jpg",
    link: "/nalaka",
    rating: 4.4
  },
  {
    name: "Sanduni Gallage",
    text: "A huge thank you to Studio Respect Weddings for capturing our wedding day so beautifully! 💕 Your attention to detail, professionalism, and calm guidance allowed us to relax completely, knowing our memories were in the best hands....",
   img: "/images/rew/26.jpg",
    bg: "/images/rew/26.jpg",
    link: "/sanduni",
    rating: 4.7
  },
  {
    name: "Mandakini Silva ",
    text: "We chose Studio Respect Weddings for our destination wedding because their photography style felt elegant, trendy, and timeless — and they did not disappoint! ✨ ....",
   img: "/images/portfolio/11/DSC09542.jpg",
    bg: "/images/portfolio/11/DSC09542.jpg",
    link: "/thisaranga",
    rating: 4.5
  },
  
];

const Reviews = () => {

  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return [
      ...Array(fullStars).fill("full"),
      ...(hasHalfStar ? ["half"] : []),
      ...Array(emptyStars).fill("empty")
    ];
  };

  return (
    <div id="reviews-section">
      {/* Header */}
      <div id="reviews-header" className="reviews-header-bg">
        <h2 id="reviews-title">What Our Clients Say</h2>
      </div>

      {/* Cards Section */}
      <div id="reviews-cards-section">
        <div id="reviews-cards">
          {reviewsData.map((review, index) => (
            <div className="reviews-card" key={index}>
              <div
                className="reviews-card-bg"
                style={{ backgroundImage: `url(${review.bg})` }}
              ></div>

              <img src={review.img} alt={review.name} className="reviews-profile-img" />

              <div className="reviews-quote">❝</div>

              <div className="reviews-rating">
                {getStars(review.rating).map((star, i) => (
                  <i
                    key={i}
                    className={
                      star === "full"
                        ? "reviews-star-full"
                        : star === "half"
                        ? "reviews-star-half"
                        : "reviews-star-empty"
                    }
                  ></i>
                ))}
              </div>

              <h3 className="reviews-name">{review.name}</h3>

              <p className="reviews-text">{review.text}</p>

              <a href={review.link} className="reviews-read-more-btn">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
