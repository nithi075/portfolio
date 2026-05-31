import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const feedback = [
  { quote: "His web development skills are top-notch. He delivered a stunning site within our tight deadline.", name: "Client A", role: "Founder, Startup X" },
  { quote: "The Meta ads strategy generated 3x more leads than our previous agency. Highly recommended.", name: "Client B", role: "Marketing Head, Brand Y" }
];

const Testimonials = () => {
  return (
    <section className="testimonials-container section-padding">
      <h2 className="huge-text">CLIENT VOICES</h2>
      
      <div className="testimonials-grid">
        {feedback.map((item, index) => (
          <motion.div 
            key={index} 
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="quote-mark">“</div>
            <p className="quote-text">{item.quote}</p>
            <div className="client-info">
              <h4 className="client-name">{item.name}</h4>
              <span className="client-role">{item.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;