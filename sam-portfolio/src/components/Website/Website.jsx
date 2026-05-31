
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Website.css';
import kornixaImg from '../../assets/about1.jpg';
import lensStudioImg from '../../assets/preview.jpeg';
import priceImg from '../../assets/hero-model.jpeg';

const projects = [
  {
    category: 'Photography Portfolio',
    title: 'Click By Korniza',
    description:
      'Professional photography showcase website with premium design and smooth animations.',
    image:
      kornixaImg,
    link: 'https://kornixa.com',
  },
  {
    category: 'Photography Portfolio',
    title: 'DP Photography',
    description:
      'Modern portfolio website designed for photographers and creators.',
    image:
      lensStudioImg,
    link: 'https://your-photo-client.com',
  },
//   {
//     category: 'Gym Portfolio',
//     title: 'PowerFit Gym',
//     description:
//       'High-converting fitness website with membership showcase.',
//     image:
//       'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
//     link: 'https://your-gym-client.com',
//   },
//   {
//     category: 'Makeup Artist',
//     title: 'Glam Studio',
//     description:
//       'Luxury makeup artist portfolio website with elegant branding.',
//     image:
//       'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
//     link: 'https://your-makeup-client.com',
//   },
  {
    category: 'E-Commerce',
    title: 'Princy Fashion Boutique',
    description:
      'Complete fashion shopping experience with secure payments.',
    image:
      priceImg,
    link: 'https://your-store-one.com',
  },
//   {
//     category: 'E-Commerce',
//     title: 'Electronics Hub',
//     description:
//       'Modern online store with product catalog and checkout.',
//     image:
//       'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
//     link: 'https://your-store-two.com',
//   },
];

const WebDevelopment = () => {
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
        WEB DEVELOPMENT
      </motion.h1>

      <p className="intro-text">
        We create premium websites that blend modern design,
        seamless performance and conversion-focused user
        experiences.
      </p>

      {/* Overview */}
      <div className="overview-section">
        <h2>CRAFTING DIGITAL EXPERIENCES</h2>

        <p>
          From portfolio websites to complete e-commerce
          solutions, every project is designed to help
          businesses grow online.
        </p>

        <p>
          Fast loading, responsive design, SEO optimization
          and premium UI/UX are included in every website
          we build.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="extra-section">
        <h3>FEATURED PROJECTS</h3>

        <div className="recent-work-grid">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="work-item-link"
              whileHover={{ y: -8 }}
            >
              <div className="premium-card">
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  <div className="project-overlay">

                    <span className="project-badge">
                      {project.category}
                    </span>

                    <h4>{project.title}</h4>

                    <p>{project.description}</p>

                    <span className="project-button">
                      Visit Website →
                    </span>

                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="extra-section">
        <h3>PACKAGES</h3>

        <div className="pricing-grid">

          <motion.div
            whileHover={{ y: -5 }}
            className="price-card"
          >
            <h3>Portfolio Website</h3>

         <p
  className="price"
  style={{
    fontSize: window.innerWidth <= 768 ? "1.8rem" : "2.5rem",
  }}
>
  ₹3,499
</p>

            <ul className="features-list">
              <li>⚡ Ultra-Fast Performance</li>
              <li>📱 Fully Responsive Design</li>
              <li>✨ Premium Animations</li>
              <li>🔍 SEO Optimized</li>
              <li>🚀 Free Deployment</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="price-card"
          >
            <h3>E-Commerce Store</h3>

           <p
  className="price"
  style={{
    fontSize: window.innerWidth <= 768 ? "1.8rem" : "2.5rem",
  }}
>
  ₹7,999
</p>


            <ul className="features-list">
              <li>💳 Payment Gateway</li>
              <li>📦 Admin Dashboard</li>
              <li>📊 Analytics Integration</li>
              <li>🔒 SSL Security</li>
              <li>🛒 Shopping Cart</li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Testimonials */}
      <div className="extra-section">
        <h3>CLIENT TESTIMONIALS</h3>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              "Outstanding design quality and smooth
              communication. The final website exceeded
              expectations."
            </p>
            <h4>— Click by Korniza</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Professional work delivered on time and
              exactly as requested."
            </p>
            <h4>— Blue Moon Studio</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Clean design, fast performance and excellent
              support."
            </p>
            <h4>— Princy Fashion Boutique</h4>
          </div>

        </div>
      </div>

      {/* Tech Stack */}
      <div className="extra-section">
        <h3>TECH STACK I USE</h3>

        <div className="tech-tags">
          {[
            'React.js',
            'Next.js',
            'Framer Motion',
            'Node.js',
            'MongoDB',
            'Tailwind CSS',
            'Express.js',
            'Firebase',
          ].map((tech) => (
            <span
              key={tech}
              className="tech-tag"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WebDevelopment;
