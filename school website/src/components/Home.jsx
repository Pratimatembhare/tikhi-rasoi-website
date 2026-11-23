import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import './Home.css';
import buildingImg from '../assets/building.jpg';
import logoImg from '../assets/logo.jpg';

const Home = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], ['0%', '30%']);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="heroSection" id="home">
      {/* Parallax Background */}
      <motion.div 
        className="parallaxBackground"
        style={{ y: yBg, backgroundImage: `url(${buildingImg})` }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="gradientOverlay" />

      {/* Main Content */}
      <motion.div 
        className="contentContainer"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Floating School Logo at Center Top */}
        <motion.div 
          className="logoContainer"
          variants={fadeInUp}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={logoImg} alt="Apollo Convent Logo" className="schoolLogo" />
        </motion.div>

        {/* Animated Welcome Badge */}
        <motion.div variants={fadeInUp} className="welcomeBadge">
          Welcome to Apollo Convent Higher Secondary School
        </motion.div>

        {/* Headings */}
        <motion.h1 variants={fadeInUp} className="mainHeading">
          Excellence Through Education
        </motion.h1>
        
        <motion.h2 variants={fadeInUp} className="subHeading">
          Building Bright Futures Through Knowledge, Discipline & Innovation
        </motion.h2>

        <motion.p variants={fadeInUp} className="description">
          Apollo Convent Higher Secondary School, Balaghat provides quality education, modern facilities, and holistic development for every student.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="buttonContainer">
          <button className="primaryBtn">
            Apply For Admission
            <ArrowRight size={20} />
          </button>
          <button className="secondaryBtn">
            Explore Campus
            <Compass size={20} />
          </button>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="statsSection"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {[
          { number: "1000+", label: "Students" },
          { number: "50+", label: "Teachers" },
          { number: "20+", label: "Years Excellence" },
          { number: "100%", label: "Academic Support" }
        ].map((stat, index) => (
          <motion.div 
            key={index} 
            className="statItem"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="statNumber">{stat.number}</div>
            <div className="statLabel">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="scrollIndicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="scrollText">Scroll</span>
        <div className="mouse">
          <motion.div 
            className="wheel"
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
