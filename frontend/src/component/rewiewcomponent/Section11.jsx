import React from "react";
import "./TestimonialSection.css";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <div id="testimonial-section" className="testimonial-wrapper">
      {/* Cover Section */}
      <div 
        id="testimonial-cover" 
        className="testimonial-cover"
        style={{
          backgroundImage: 'url("/images/rew/22.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
               Chathuranga & Gayani
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
        Choosing Studio Respect Weddings was truly one of the best decisions we made during our wedding planning! 💕
A huge thank you to Pathum malli and the entire Studio Respect crew for the incredible work you did. Every capture is so natural, full of emotion, and beautifully reflects the joy of our special day. We couldn’t be happier to have such timeless memories to cherish forever. 😍😍

Your professionalism, friendliness, passion, and perfect time management made the whole experience effortless and enjoyable. You’re not just talented — you’re genuinely dedicated to making every couple’s dream day come true in the most magical way. 💖💖

We’re so grateful for everything and can’t recommend Studio Respect Weddings and Pathum Maduranga enough!

Love you, Studio Respect!
<br></br>
💕Chathuranga & Gayani 💕
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/21.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
