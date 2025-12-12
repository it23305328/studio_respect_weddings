import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  const wrapperRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    status: "idle", // idle | validating | sending | sent | error
    errors: {},
  });

  // Fade-in on scroll
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const elements = wrapper.querySelectorAll(".cw-contact-cover, #contact-main-container");
    const triggerPoint = window.innerHeight * 0.85;

    const reveal = () => {
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerPoint) el.classList.add("cw-visible");
      });
    };

    reveal();
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (formState.errors[id]) {
      setFormState((prev) => ({ ...prev, errors: { ...prev.errors, [id]: "" } }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) errors.phone = "Invalid phone";
    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.trim().length < 10) errors.message = "Message must be 10+ characters";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState({ status: "validating", errors: {} });
    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setFormState({ status: "error", errors });

    setFormState({ status: "sending", errors: {} });

    try {
      const serviceID = "service_yduavwj";       // <-- Replace with EmailJS Service ID
      const templateID = "template_mc5hoqr";     // <-- Replace with EmailJS Template ID
      const publicKey = "LlRIyA3zpEbJx9WVZ";       // <-- Replace with EmailJS Public Key

      const templateParams = { ...formData };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setFormState({ status: "sent", errors: {} });
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });

      setTimeout(() => setFormState({ status: "idle", errors: {} }), 3000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormState({
        status: "error",
        errors: { submit: "Failed to send message. Please try again." },
      });
    }
  };

  const getButtonContent = () => {
    switch (formState.status) {
      case "sending":
        return <>Sending... <i className="fas fa-circle-notch fa-spin"></i></>;
      case "sent":
        return <>Message Sent! <i className="fas fa-check"></i></>;
      case "validating":
        return <>Validating... <i className="fas fa-spinner fa-spin"></i></>;
      default:
        return <>Send Message <i className="fas fa-paper-plane"></i></>;
    }
  };

  return (
    <section id="contactPage" ref={wrapperRef}>
      {/* Cover Photo Section */}
      <div className="cw-contact-cover">
        <div className="cw-cover-overlay"></div>
        <div className="cw-cover-text">
          <h1>Contact</h1>
          <p>We assure you elegance through excellence.</p>
          <p>Please feel free to reach us!</p>
        </div>
      </div>

      {/* Main Content */}
      <div id="contact-main-container" className="contact-container">
        {/* Contact Info */}
        <div id="contact-info-section" className="contact-info">
          <div className="info-item">
            <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div className="info-content">
              <h3>Our Location</h3>
              <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCQgHECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyDwgCEC4YJxjHARjqAhjRAzIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFEC4YJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQo5ODkwODJqMGo3qAIIsAIB8QVwq4wjwBUK2_EFcKuMI8AVCts&um=1&ie=UTF-8&fb=1&gl=lk&sa=X&geocode=KbPROmGaf-E6MVMILrk4OY9C&daddr=384/A+Elpitiya-Pituwala-Kahaduwa+Road,+Elpitiya+80400" target="_blank" rel="noopener noreferrer">Studio Respect Weddings, 384/A Pituwala Rd, Elpitiya.</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><i className="fas fa-phone"></i></div>
            <div className="info-content">
              <h3>Phone Number</h3>
              <a href="tel:+9476765770018">+94 76 577 0018</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><i className="fas fa-envelope"></i></div>
            <div className="info-content">
              <h3>Email Address</h3>
              <a href="mailto:info@wedlockinternational.com">studiorespectweddings@gmail.com</a>
            </div>
          </div>

          <div id="social-media-section" className="social-icons">
            <a href="https://www.facebook.com/share/15vR9VYCFG/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/studiorespectweddings?igsh=eGp0djgzemRraDBm&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            
           
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form-section" className="contact-form">
          {formState.errors.submit && <div className="error-message submit-error">{formState.errors.submit}</div>}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className={formState.errors.firstName ? "error" : ""} disabled={formState.status==="sending"} />
                {formState.errors.firstName && <span className="field-error">{formState.errors.firstName}</span>}
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className={formState.errors.lastName ? "error" : ""} disabled={formState.status==="sending"} />
                {formState.errors.lastName && <span className="field-error">{formState.errors.lastName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} className={formState.errors.email ? "error" : ""} disabled={formState.status==="sending"} />
                {formState.errors.email && <span className="field-error">{formState.errors.email}</span>}
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className={formState.errors.phone ? "error" : ""} disabled={formState.status==="sending"} />
                {formState.errors.phone && <span className="field-error">{formState.errors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" value={formData.message} onChange={handleChange} className={formState.errors.message ? "error" : ""} disabled={formState.status==="sending"} rows="5"></textarea>
                {formState.errors.message && <span className="field-error">{formState.errors.message}</span>}
              </div>
            </div>

            <button type="submit" className={`send-btn ${formState.status}`} disabled={formState.status==="sending" || formState.status==="sent"}>
              {getButtonContent()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
