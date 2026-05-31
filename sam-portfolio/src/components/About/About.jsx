import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const containerVariants = {
hidden: {},
visible: {
transition: {
staggerChildren: 0.15,
},
},
};

const itemVariants = {
hidden: {
opacity: 0,
y: 50,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.8,
ease: [0.22, 1, 0.36, 1],
},
},
};

const About = () => {
return ( <section className="about-container section-padding">
<motion.div
className="about-wrapper"
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
>
<motion.h2
variants={itemVariants}
className="huge-text"
>
THE MIND <br />
BEHIND THE <br />
RESULTS
</motion.h2>

```
    <div className="about-grid">

   

      <motion.div
        variants={itemVariants}
        className="about-content"
      >
        <p className="about-lead">
          I'm Sam, a Creative Digital Specialist helping
          brands stand out, attract customers, and grow online.
        </p>

        <p className="about-description">
          From high-converting Meta Ads and modern websites
          to cinematic video editing and creative social media
          designs, I combine creativity with strategy to deliver
          measurable business results.
        </p>

        <p className="about-description">
          My focus is simple — build digital experiences that
          don't just look good but generate leads, engagement,
          and real growth.
        </p>

        <div className="about-tags">
          <span>VIDEO EDITOR</span>
          <span>META ADS</span>
          <span>WEB DEVELOPER</span>
          <span>CREATIVE DESIGNER</span>
        </div>

        <div className="about-achievements">

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="achievement-card"
          >
            <h3>50+</h3>
            <p>Projects Completed</p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="achievement-card"
          >
            <h3>100+</h3>
            <p>Videos Edited</p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="achievement-card"
          >
            <h3>20+</h3>
            <p>Websites Built</p>
          </motion.div>

        </div>

      </motion.div>

    </div>
  </motion.div>
</section>


);
};

export default About;
