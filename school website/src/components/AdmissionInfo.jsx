import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, FileText, ArrowRight } from 'lucide-react';
import './AdmissionInfo.css';

const AdmissionInfo = ({ onOpenAdmission }) => {
  const steps = [
    {
      icon: <FileText size={24} className="step-icon" />,
      title: "Submit Application",
      description: "Fill out our simple online form with your basic details and academic history."
    },
    {
      icon: <Calendar size={24} className="step-icon" />,
      title: "Schedule Interview",
      description: "Our admission team will contact you to schedule a brief interaction session."
    },
    {
      icon: <CheckCircle size={24} className="step-icon" />,
      title: "Confirm Enrollment",
      description: "Once approved, submit the required documents and complete the fee payment."
    }
  ];

  return (
    <section className="admission-info" id="admission">
      <div className="container">
        <div className="admission-content">
          <motion.div 
            className="admission-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Join Apollo Convent</h2>
            <p className="section-subtitle">Take the first step towards a brilliant future.</p>
            <p className="admission-desc">
              We welcome students who are eager to learn, grow, and make a difference. Our admission process is designed to be transparent, straightforward, and supportive.
            </p>
            
            <div className="admission-steps">
              {steps.map((step, index) => (
                <div className="step-item" key={index}>
                  <div className="step-icon-wrapper">
                    {step.icon}
                  </div>
                  <div className="step-text">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="btn btn-primary btn-lg mt-4 admission-cta"
              onClick={(e) => { e.preventDefault(); onOpenAdmission(); }}
            >
              Apply Now <ArrowRight size={20} className="ml-2" />
            </button>
          </motion.div>
          
          <motion.div 
            className="admission-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80" alt="Students studying together" />
              <div className="img-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInfo;
