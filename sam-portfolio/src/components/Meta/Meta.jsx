import React from 'react';
import { Link } from 'react-router-dom';
import './Meta.css'; 

const MetaAds = () => {
  return (
    <div className="service-detail-container section-padding">
      <Link to="/" className="back-btn">← BACK TO HOME</Link>
      <h1 className="huge-text">META ADS</h1>
      
      <p className="intro-text">
        Data-driven advertising strategies to turn clicks into customers and scale your revenue.
      </p>

      <div className="pricing-grid">
        {/* Ad Setup */}
        <div className="price-card">
          <h3>Ad Setup & Strategy</h3>
      <p
  className="price"
  style={{
    fontSize: window.innerWidth <= 768 ? "1.8rem" : "2.5rem",
  }}
>
  ₹2,000
</p>
          <ul>
            <li>Target Audience Research</li>
            <li>Ad Creative Consultation</li>
            <li>Campaign Launch Setup</li>
          </ul>
        </div>
        
        {/* Monthly Management */}
        <div className="price-card">
          <h3>Monthly Management</h3>
      <p
  className="price"
  style={{
    fontSize: window.innerWidth <= 768 ? "1.8rem" : "2.5rem",
  }}
>
  ₹5,000
</p>
          <ul>
            <li>Continuous Optimization</li>
            <li>Weekly Performance Reports</li>
            <li>A/B Testing & Scaling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MetaAds;