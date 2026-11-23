import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', onClick, icon }) => {
  const isOutline = variant === 'outline';
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`premium-btn ${isOutline ? 'btn-outline' : 'btn-primary'} ${className}`}
      onClick={onClick}
    >
      <span className="btn-content">
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </span>
      {!isOutline && <div className="btn-glow"></div>}
    </motion.button>
  );
};

export default Button;
