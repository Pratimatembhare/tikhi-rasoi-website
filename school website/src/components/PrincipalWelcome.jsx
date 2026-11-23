import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './PrincipalWelcome.css';

const PrincipalWelcome = () => {
  return (
    <section className="principal-section" id="about">
      <div className="container">
        <div className="principal-grid">
          <motion.div 
            className="principal-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img src="/principal_photo.png" alt="Principal" className="principal-img" />
              <div className="experience-badge">
                <span className="years">20+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="principal-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-title text-left">
              <h4 className="subtitle">Welcome Message</h4>
              <h2>From the Principal's Desk</h2>
            </div>
            
            <div className="quote-icon">
              <Quote size={40} color="var(--accent-yellow)" opacity={0.5} />
            </div>
            
            <p className="principal-message">
              "Education is not just about academic excellence; it is about character building, nurturing creativity, and inspiring a lifelong love for learning. At Apollo Convent Higher Secondary School, our mission is to provide an environment where every child feels valued and empowered to reach their full potential. We believe in holistic development, integrating modern pedagogy with strong moral values."
            </p>
            
            <div className="principal-signature">
              <h3 className="name">Dr. A. Sharma</h3>
              <p className="designation">Principal, Apollo Convent</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalWelcome;
