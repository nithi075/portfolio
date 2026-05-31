import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  { id: '01', title: 'WEB DEVELOPMENT', desc: 'Custom, high-performance MERN stack applications & stunning portfolio sites.' },
  { id: '02', title: 'PERFORMANCE ADS', desc: 'Data-driven Meta campaigns that generate high-quality leads & sales.' },
  { id: '03', title: 'VISUAL DESIGN', desc: 'Premium editorial posters & branding that elevate your business identity.' },
  { id: '04', title: 'VIDEO EDITING', desc: 'Cinematic, fast-paced content optimized for maximum viewer retention.' }
];

const Services = () => {
  return (
    <section className="services-container section-padding">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="huge-text"
      >
        THE IMPACT.
      </motion.h2>
      
      <div className="services-grid">
        {services.map((item, index) => (
          <motion.div 
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="service-id">{item.id}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="service-hover-line"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;