import React, { useState } from "react";
import "./ReserveForm.css";
import { db } from "../../firebase";
import emailjs from "emailjs-com";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const PhotographyForm = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    contactMethod: "email",
    serviceType: "",
    time: "",
    style: "",
    hearAbout: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    notes: "",
    understand: false,
  });

  const [status, setStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    // sanitize phone input to digits only
    let newValue = type === "checkbox" ? checked : value;
    if (id === "phone") {
      // remove non-digit characters
      newValue = String(newValue).replace(/\D/g, "");
    }
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : newValue });
  };

  const handleOptionSelect = (group, value) => {
    setSelectedOptions({ ...selectedOptions, [group]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedOptions.serviceType) return alert("Please select a service type");
    if (!formData.understand) return alert("Please confirm the terms");

    try {
      setStatus("sending");

      // Save to Firebase
      const payload = { ...formData, ...selectedOptions, createdAt: serverTimestamp() };
      await addDoc(collection(db, "reservations"), payload);

      // Send Email via EmailJS (replace service/template/public key with your values)
      await emailjs.send(
        "service_yduavwj",
        "template_r6vrpyb",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          venue: formData.venue,
          serviceType: selectedOptions.serviceType,
          time: selectedOptions.time,
          style: selectedOptions.style,
          hearAbout: selectedOptions.hearAbout,
          notes: formData.notes,
        },
        "LlRIyA3zpEbJx9WVZ"
      );

      // WhatsApp send removed — keep success flow after email send
      setStatus("sent");
      alert("Thank you! Your inquiry has been sent successfully ✅");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        venue: "",
        notes: "",
        understand: false,
      });
      setSelectedOptions({
        contactMethod: "email",
        serviceType: "",
        time: "",
        style: "",
        hearAbout: "",
      });

      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      console.error("Error sending request:", error);
      setStatus("error");
      alert("Something went wrong. Please try again ❌");
    }
  };

  return (
    <div className="container">
      <div className="cover">
        <img src="/images/hero/2.jpg" alt="Photography Cover" />
        <div className="cover-text">
          <h1>Reserve Now</h1>
          <div className="line" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Contact Info */}
        <div className="form-section">
          <h2>Let’s start with Contact Information</h2>
          <br />
          <div className="form-group">
            <label htmlFor="name">Your Name*</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Digits only"
            />
          </div>
          <div className="form-group">
            <label>Preferred Contact Method</label>
            <div className="radio-group">
              {["email", "whatsapp", "phone"].map((method) => (
                <div key={method} className="radio-option">
                  <input
                    type="radio"
                    id={`contact-${method}-input`}
                    name="contact-method"
                    value={method}
                    checked={selectedOptions.contactMethod === method}
                    onChange={() => handleOptionSelect("contactMethod", method)}
                  />
                  <label htmlFor={`contact-${method}-input`}>
                    {method.charAt(0).toUpperCase() + method.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="form-section">
          <br />
          <h2>Event Details</h2>
          <div className="form-group">
            <label>Service type</label>
            <div className="service-options">
              {["wedding", "engagement", "maternity", "casual", "family", "other"].map(
                (service) => (
                  <div
                    key={service}
                    id={`service-${service}-option`}
                    className={`service-option ${
                      selectedOptions.serviceType === service ? "selected" : ""
                    }`}
                    onClick={() => handleOptionSelect("serviceType", service)}
                  >
                    <input type="radio" name="service-type" value={service} readOnly />
                    <label>{service.charAt(0).toUpperCase() + service.slice(1)}</label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="form-section">
          <br />
          <h2>Location</h2>
          <div className="date-time-container">
            <div className="date-group form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="venue">Venue Type</label>
              <input
                type="text"
                id="venue"
                value={formData.venue}
                onChange={handleInputChange}
                placeholder="e.g., Beach, Garden, Church, Hotel"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Time</label>
            <div className="time-options">
              {["morning", "evening", "full-day"].map((time) => (
                <div
                  key={time}
                  id={`time-${time}-option`}
                  className={`time-option ${
                    selectedOptions.time === time ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("time", time)}
                >
                  <input type="radio" name="time" value={time} readOnly />
                  <label>{time.charAt(0).toUpperCase() + time.slice(1)}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photography Style & Notes */}
        <div className="form-section">
          <br />
          <h2>Photography Style</h2>
          <div className="style-options">
            {["traditional", "candid", "editorial", "documentary"].map((style) => (
              <div
                key={style}
                id={`style-${style}-option`}
                className={`style-option ${
                  selectedOptions.style === style ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect("style", style)}
              >
                <input type="radio" name="photography-style" value={style} readOnly />
                <label>{style.charAt(0).toUpperCase() + style.slice(1)}</label>
              </div>
            ))}
          </div>
          <div className="form-group">
            <br />
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              rows="4"
              value={formData.notes}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        {/* How did you hear about us */}
        <div className="form-section">
          <br />
          <h2>How Did You Hear About Us?</h2>
          <div className="hear-about-options">
            {["friend", "social", "website", "other"].map((source) => (
              <div
                key={source}
                id={`hear-${source}-option`}
                className={`hear-option ${
                  selectedOptions.hearAbout === source ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect("hearAbout", source)}
              >
                <input type="radio" name="hear-about" value={source} readOnly />
                <label>{source.charAt(0).toUpperCase() + source.slice(1)}</label>
              </div>
            ))}
          </div>
          <br></br>

          <div className="terms-group">
            <div className="checkbox-option">
              <input
                type="checkbox"
                id="understand"
                checked={formData.understand}
                onChange={handleInputChange}
                required
              />
              
              <label htmlFor="understand">
                I understand this is an initial inquiry.
              </label>
            </div>
          </div>
          <br />

          <button type="submit" className="submit-btn" disabled={status === "sending"}>
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Sent ✓"
              : "Send Request →"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhotographyForm;
