import React from "react";
import { motion } from "framer-motion";
import "./Hero.css"; // CSS inga link aaguthu

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section className="hero-container section-padding">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.span variants={itemVariants} className="hero-eyebrow">
          CREATIVE DIGITAL SPECIALIST
        </motion.span>
        <motion.h1 variants={itemVariants} className="huge-text">
          TURNING CLICKS<br />
          INTO <span className="text-highlight">CUSTOMERS.</span>
        </motion.h1>
        <motion.div variants={itemVariants} className="hero-subtext">
          <p>Elevating brands through high-converting Meta Ads, cinematic video editing, and modern web experiences.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="hero-cta">
          <motion.button whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="btn-primary">
            EXPLORE PROJECTS
          </motion.button>
          <motion.button whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="btn-secondary">
            BOOK A CALL
          </motion.button>
        </motion.div>
        <motion.div variants={itemVariants} className="hero-footer">
          <p>WORKED WITH 50+ BRANDS GLOBALLY</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;