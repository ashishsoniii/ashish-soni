import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhotoRound from "./components/PhotoRound";

function HomePage() {
  const skills = [
    { text: "React" },
    { text: "HTML" },
    { text: "CSS" },
    { text: "JavaScript" },
    { text: "Web Development" },
  ];

  return (
    <motion.div className="homepage-main">
      <AnimatePresence>
        <motion.div
          className="hp-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -500 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="ashish-txt">Ashish Soni</h1>
          <p className="ashish-txt mobile-only">
            Designing and developing the web of tomorrow!
          </p>
          <div className="hide-mobile">
            <button className="glow-on-hover" type="button">
              Web Developer
            </button>
            <div className="nav-btn-2 tp">
              <a href="/" className="nav-btn-link2" style={{ color: "black" }}>
                Building modern, mobile-first websites that make a lasting impression!
              </a>
            </div>
            {/* Render skills dynamically */}
            <div className="skills-container">
              {skills.map((skill, index) => (
                <button key={index} className="skill-button">
                  {skill.text}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="hp-right img-correction"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PhotoRound />
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
