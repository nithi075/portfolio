import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import './Results.css';

const Stat = ({ number, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  React.useEffect(() => {
    const animation = animate(count, parseInt(number), { duration: 2 });
    return () => animation.stop();
  }, [number]);

  return (
    <div className="result-card">
      <h3 className="huge-text"><motion.span>{rounded}</motion.span>+</h3>
      <p>{label}</p>
    </div>
  );
};

const Results = () => {
  return (
    <section className="results-container section-padding">
      <div className="results-header">
        <span className="hero-eyebrow">TRACK RECORD</span>
        <h2 className="huge-text">NUMBERS THAT <br/>DRIVE GROWTH.</h2>
      </div>
      
      <div className="results-grid">
        <Stat number="50" label="PROJECTS COMPLETED" />
        <Stat number="100" label="VIDEOS EDITED" />
        <Stat number="20" label="SITES BUILT" />
        <Stat number="500" label="LEADS GENERATED" />
      </div>
    </section>
  );
};

export default Results;