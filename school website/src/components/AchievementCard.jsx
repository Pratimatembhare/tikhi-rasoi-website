import React from 'react';
import { motion } from 'framer-motion';
import './AchievementCard.css';

const AchievementCard = ({ icon, text, delay = 0, position = {} }) => {
  return (
    <motion.div
      className="achievement-card glass-card"
      style={{ ...position }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: 'spring',
        stiffness: 100 
      }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <div className="ac-icon">{icon}</div>
      <div className="ac-text">{text}</div>
    </motion.div>
  );
};

export default AchievementCard;
