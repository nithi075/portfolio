import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Poster.css";

const PosterDesign = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="service-detail-container"
    >
      <Link to="/" className="back-btn">
        ← BACK TO HOME
      </Link>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="huge-text"
      >
        POSTER DESIGN
      </motion.h1>

      <p className="intro-text">
        Eye-catching visuals that communicate your message,
        strengthen your brand identity and capture attention
        instantly.
      </p>

      {/* Overview */}
      <div className="overview-section">
        <h2>DESIGNS THAT STAND OUT</h2>

        <p>
          From social media creatives to professional event
          posters, every design is crafted with strategy,
          creativity and attention to detail.
        </p>

        <p>
          Modern layouts, strong typography and premium
          visuals help your brand make a lasting impression.
        </p>
      </div>

      {/* Recent Works */}
      <div className="extra-section">
        <h3>RECENT DESIGNS</h3>

        <div className="recent-work-grid">
          <div className="premium-card">
            <div
              className="project-image"
              style={{
                backgroundImage: "url('/images/poster1.jpg')",
              }}
            >
              <div className="project-overlay">
                <span className="project-badge">
                  Social Media
                </span>

                <h4>Instagram Promotion</h4>

                <p>
                  Modern promotional creative designed for
                  engagement and conversions.
                </p>
              </div>
            </div>
          </div>

          <div className="premium-card">
            <div
              className="project-image"
              style={{
                backgroundImage: "url('/images/poster2.jpg')",
              }}
            >
              <div className="project-overlay">
                <span className="project-badge">
                  Event Poster
                </span>

                <h4>Music Festival</h4>

                <p>
                  Bold typography and creative visuals for
                  maximum impact.
                </p>
              </div>
            </div>
          </div>

          <div className="premium-card">
            <div
              className="project-image"
              style={{
                backgroundImage: "url('/images/poster3.jpg')",
              }}
            >
              <div className="project-overlay">
                <span className="project-badge">
                  Brand Campaign
                </span>

                <h4>Product Launch</h4>

                <p>
                  Premium poster design focused on brand
                  awareness and marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="extra-section">
        <h3>DESIGN PACKAGES</h3>

        <div className="pricing-grid">
          <motion.div
            whileHover={{ y: -5 }}
            className="price-card"
          >
            <h3>Social Media Post</h3>

            <p className="price">₹150</p>

            <ul className="features-list">
              <li>🎨 Custom Brand Aesthetic</li>
              <li>📸 High Quality Resolution</li>
              <li>⚡ Fast Delivery</li>
              <li>📱 Social Media Ready</li>
              <li>🔄 Revision Included</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="price-card"
          >
            <h3>Event / Brand Poster</h3>

            <p className="price">₹400</p>

            <ul className="features-list">
              <li>✨ Creative Concept Design</li>
              <li>🖋 Professional Typography</li>
              <li>🖨 Print & Digital Formats</li>
              <li>🎯 Marketing Focused Layout</li>
              <li>🔄 Revision Included</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="extra-section">
        <h3>CLIENT FEEDBACK</h3>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "Creative and professional designs that
              perfectly matched our brand."
            </p>
            <h4>— Local Business</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "The posters were delivered quickly and
              looked amazing."
            </p>
            <h4>— Event Organizer</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "High-quality designs with great attention
              to detail."
            </p>
            <h4>— Startup Founder</h4>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="extra-section">
        <h3>TOOLS I USE</h3>

        <div className="tech-tags">
          {[
            "Adobe Photoshop",
            "Illustrator",
            "Canva Pro",
            "Figma",
            "Lightroom",
            "After Effects",
          ].map((tool) => (
            <span key={tool} className="tech-tag">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PosterDesign;