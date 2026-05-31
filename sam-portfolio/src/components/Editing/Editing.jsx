import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Editing.css";

// Own Images
import reelImg from "../../assets/preview.jpeg";
import youtubeImg from "../../assets/preview.jpeg";
import commercialImg from "../../assets/preview.jpeg";

const VideoEditing = () => {
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
        VIDEO EDITING
      </motion.h1>

      <p className="intro-text">
        Cinematic storytelling that captures attention,
        increases engagement and transforms raw footage
        into premium content.
      </p>

      {/* Overview */}
      <div className="overview-section">
        <h2>CRAFTING VISUAL STORIES</h2>

        <p>
          From short-form viral content to long-form
          cinematic productions, every video is edited
          with precision and creativity.
        </p>

        <p>
          Smooth transitions, color grading, motion
          graphics, sound design and platform optimization
          are included in every project.
        </p>
      </div>

      {/* Recent Works */}
      <div className="extra-section">
        <h3>RECENT WORKS</h3>

        <div className="recent-work-grid">
          <motion.div
            whileHover={{ y: -8 }}
            className="premium-card"
          >
            <div
              className="project-image"
              style={{
                backgroundImage: `url(${reelImg})`,
              }}
            >
              <div className="project-overlay">
                <span className="project-badge">
                  Instagram Reel
                </span>

                <h4>Fitness Promo Reel</h4>

                <p>
                  High-energy short form content with
                  captions, effects and motion graphics.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="premium-card"
          >
            <div
              className="project-image"
              style={{
                backgroundImage: `url(${youtubeImg})`,
              }}
            >
              <div className="project-overlay">
                <span className="project-badge">
                  YouTube Video
                </span>

                <h4>Travel Vlog Edit</h4>

                <p>
                  Cinematic storytelling with smooth
                  transitions and professional color grading.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="premium-card"
          >
            <div
              className="project-image"
              style={{
                backgroundImage: `url(${commercialImg})`,
              }}
            >
              <div className="project-overlay">
                <span className="project-badge">
                  Commercial Ad
                </span>

                <h4>Brand Advertisement</h4>

                <p>
                  Premium promotional edit with sound
                  design, motion graphics and visual effects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <div className="extra-section">
        <h3>EDITING SERVICES</h3>

        <div className="pricing-grid">
          <motion.div
            whileHover={{ y: -5 }}
            className="price-card"
          >
            <h3>Short Reels / Shorts</h3>

    <p
  className="price"
  style={{
    fontSize: window.innerWidth <= 768 ? "1.8rem" : "2.5rem",
  }}
>
  ₹250
</p>
            <ul className="features-list">
              <li>⚡ Dynamic Transitions</li>
              <li>🎵 Trending Music & SFX</li>
              <li>📝 Captivating Subtitles</li>
              <li>📱 Social Media Optimized</li>
              <li>🚀 Fast Delivery</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="price-card"
          >
            <h3>Long Form Video</h3>

   
            <ul className="features-list">
              <li>🎨 Professional Color Grading</li>
              <li>🎧 Sound Design & Mixing</li>
              <li>🎬 Multi-Cam Editing</li>
              <li>✨ Motion Graphics</li>
              <li>📺 YouTube Optimized</li>
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
              "Amazing editing quality. The final reel
              exceeded my expectations."
            </p>
            <h4>— Content Creator</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Professional communication and quick
              delivery. Highly recommended."
            </p>
            <h4>— Business Client</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "The storytelling and pacing were perfect."
            </p>
            <h4>— YouTuber</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoEditing;