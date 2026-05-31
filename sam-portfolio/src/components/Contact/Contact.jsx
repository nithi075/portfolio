import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Project Enquiry*

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📝 Project Details:
${formData.project}
    `;

    const whatsappUrl = `https://wa.me/918667041407?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact-container section-padding">
      <div className="contact-grid">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-left"
        >
          <h2 className="huge-text">
            LET'S START <br />
            SOMETHING{" "}
            <span className="text-highlight">
              NEW.
            </span>
          </h2>

          <p className="contact-desc">
            Ready to elevate your brand? Send me a message
            and let's turn your vision into reality.
          </p>

          <div className="contact-links">

            <a
              href="mailto:yourmail@gmail.com"
              className="link-item"
            >
              EMAIL ME
            </a>

            <a
              href="https://wa.me/918667041407"
              target="_blank"
              rel="noreferrer"
              className="link-item"
            >
              WHATSAPP
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="link-item"
            >
              INSTAGRAM
            </a>

          </div>
        </motion.div>

        {/* Right Column Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="project"
            placeholder="TELL ME ABOUT YOUR PROJECT"
            rows="5"
            value={formData.project}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn-primary"
          >
            SEND MESSAGE
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;