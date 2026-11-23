import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Users, BookOpen, Award, TrendingUp, ChevronDown } from 'lucide-react';
import buildingImg from '../assets/building-hd.jpg';
import logoImg from '../assets/logo-hd.jpg';
import './Hero.css';
import '../index.css';

const Hero = ({ onOpenAdmission, onOpenExplore }) => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="hero-split" id="home">
      <div className="container hero-split-container">
        
        {/* Left Side: Text Content */}
        <motion.div 
          className="hero-split-content"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* School Logo */}
          <motion.div variants={fadeUp} className="hero-logo-container-left">
            <img src={logoImg} alt="Apollo Convent Logo" className="hero-left-logo" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={fadeUp} className="hero-split-title">
            Apollo Convent <br/>
            <span className="hero-title-secondary">Higher Secondary School</span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2 variants={fadeUp} className="hero-split-tagline">
            Excellence Through Education
          </motion.h2>

          {/* Short Description */}
          <motion.p variants={fadeUp} className="hero-split-desc">
            Empowering young minds with knowledge, values, innovation, and excellence for a brighter future.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="hero-split-actions">
            <button onClick={onOpenAdmission} className="btn-primary-split">
              Admissions Open
              <ArrowRight size={20} />
            </button>
            <button onClick={onOpenExplore} className="btn-secondary-split">
              <Compass size={20} />
              Explore Campus
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          className="hero-split-image-wrapper"
          variants={fadeLeft}
          initial="hidden"
          animate="show"
        >
          <div className="hero-image-frame">
            <img src={buildingImg} alt="Apollo Convent Building" className="hero-building-hd-img" />
          </div>
        </motion.div>
        
      </div>

      {/* Stats Section Below Split Hero */}
      <div className="hero-stats-centered-wrapper">
        <div className="hero-stats-container">
          {[
            { icon: Users, count: "1000+", label: "Students" },
            { icon: BookOpen, count: "50+", label: "Teachers" },
            { icon: Award, count: "20+", label: "Years Excellence" },
            { icon: TrendingUp, count: "100%", label: "Academic Support" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className="stat-card glass-card-dark"
            >
              <div className="stat-icon-wrapper-light">
                <stat.icon size={24} className="stat-icon-yellow" />
              </div>
              <div className="stat-info-light">
                <h3 className="stat-count-white">{stat.count}</h3>
                <p className="stat-label-gray">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="scroll-indicator-centered"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} color="white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

