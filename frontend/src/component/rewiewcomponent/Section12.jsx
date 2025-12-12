import React from "react";
import "./TestimonialSectionp2.css";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <div id="testimonial-section" className="testimonial-wrapper">
      {/* Cover Section */}
      <div 
        id="testimonial-cover" 
        className="testimonial-cover"
        style={{
          backgroundImage: 'url("/images/rew/24.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
            Nalaka & Dasuni
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
           I’ve been following Studio Respect Weddings on Instagram for years, always admiring their stunning and professional photography work. So, when it came time to plan our own wedding, they were the very first team that came to mind. 💕

It was our first time having professional photos taken, and from the very beginning, Pathum Maduranga and his team made us feel completely comfortable and confident. Their calm, friendly approach helped us be ourselves, and they captured every emotion so naturally and beautifully. ✨

Our entire wedding party was so impressed with how smoothly Studio Respect managed everything throughout the day — organized, professional, yet full of warmth and positivity. Watching their passion and dedication in action, we knew right away that the photos would turn out perfect — and they truly did! 💫

A huge thank you to Pathum Maduranga and the amazing Studio Respect Weddings team for giving us memories we’ll cherish forever, and to Shanika for her kind, loving communication every step of the way. ❤️

Having them capture our wedding was one of the best decisions we ever made. Highly recommended — just visit their Instagram page once, and you’ll instantly see why they’re the best in the business! 💍📸
<br></br>
Nalaka | Dasuni
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/23.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
