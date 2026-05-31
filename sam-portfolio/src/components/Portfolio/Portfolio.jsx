import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Link import panna marakkathinga
import './Portfolio.css';

import webImg from '../../assets/web.jpg'; 
import videoImg from '../../assets/video-edit.jpg';
import posterImg from '../../assets/poster.jpg';
import metaImg from '../../assets/meta-ads.jpg';

const works = [
  { id: 'web-development', title: 'WEB DEVELOPMENT', category: 'Portfolio', img: webImg },
  { id: 'video-editing', title: 'VIDEO EDITING', category: 'Showcase', img: videoImg },
  { id: 'poster-design', title: 'POSTER DESIGN', category: 'Creative', img: posterImg },
  { id: 'meta-ads', title: 'META ADS', category: 'Case Study', img: metaImg }
];

const Portfolio = () => {
  return (
    <section className="portfolio-container section-padding">
      <h2 className="huge-text">SELECTED WORK</h2>
      <div className="portfolio-grid">
        {works.map((work) => (
          // Link tag add pannirukken, ithu click aana corresponding path-kku pogum
          <Link to={`/portfolio/${work.id}`} key={work.id} className="portfolio-link-wrapper">
            <motion.div 
              className="portfolio-card"
              whileHover="hover"
            >
              <motion.div 
                className="card-img" 
                style={{ backgroundImage: `url(${work.img})` }}
                variants={{ hover: { scale: 1.1 } }} 
              />
              <div className="card-overlay">
                <span className="category">{work.category}</span>
                <h3>{work.title}</h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;