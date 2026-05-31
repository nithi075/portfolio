import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./MetaAds.css";

const stats = [
  { value: "120+", label: "Leads Generated" },
  { value: "4.8x", label: "Average ROAS" },
  { value: "₹3L+", label: "Revenue Generated" },
  { value: "₹90", label: "Cost Per Lead" },
];

const MetaAds = () => {
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
        META ADS
      </motion.h1>

      <p className="intro-text">
        Performance-driven Meta advertising campaigns
        designed to generate leads, increase sales and
        maximize return on ad spend.
      </p>

      {/* Overview */}
      <div className="overview-section">
        <h2>SCALING BRANDS WITH PAID ADS</h2>

        <p>
          We create and manage Facebook & Instagram ad
          campaigns that help businesses reach the right
          audience and achieve measurable growth.
        </p>

        <p>
          From audience research to creative strategy,
          every campaign is optimized for maximum ROI.
        </p>
      </div>

      {/* Results */}
      <div className="extra-section">
        <h3>CAMPAIGN RESULTS</h3>

        <div className="meta-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="extra-section">
        <h3>SERVICES INCLUDED</h3>

        <div className="pricing-grid">
          <motion.div
            whileHover={{ y: -5 }}
            className="price-card"
          >
            <h3>Lead Generation</h3>

      <p
  className="price"
  style={{
    fontSize: window.innerWidth <= 768 ? "1.8rem" : "2.5rem",
  }}
>
  ₹2,999
</p>

            <ul className="features-list">
              <li>🎯 Audience Targeting</li>
              <li>📈 Lead Campaign Setup</li>
              <li>🧪 A/B Testing</li>
              <li>📊 Weekly Reports</li>
              <li>🚀 Optimization</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="price-card"
          >
            <h3>Sales Campaign</h3>

      <p
  className="price"
  style={{
    fontSize: window.innerWidth <= 768 ? "1.8rem" : "2.5rem",
  }}
>
  ₹4,999
</p>

            <ul className="features-list">
              <li>🛒 Conversion Campaigns</li>
              <li>🎨 Creative Strategy</li>
              <li>📊 Pixel Setup</li>
              <li>📈 ROAS Tracking</li>
              <li>⚡ Scaling Strategy</li>
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
              "Generated quality leads at a very low cost.
              The results exceeded expectations."
            </p>
            <h4>— Real Estate Client</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Excellent campaign management and clear
              reporting every week."
            </p>
            <h4>— E-Commerce Brand</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "ROAS improved significantly within the
              first month."
            </p>
            <h4>— Local Business Owner</h4>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="extra-section">
        <h3>TOOLS I USE</h3>

        <div className="tech-tags">
          {[
            "Meta Ads Manager",
            "Facebook Pixel",
            "Google Analytics",
            "Google Tag Manager",
            "Canva",
            "ChatGPT",
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

export default MetaAds;