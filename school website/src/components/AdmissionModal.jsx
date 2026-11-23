import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import './AdmissionModal.css';

const AdmissionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          
          <div className="modal-header">
            <h2>Apply for Admission</h2>
            <p>Start your journey toward excellence. Fill out the form below and our team will contact you shortly.</p>
          </div>

          <form className="admission-form" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted!'); onClose(); }}>
            <div className="form-group">
              <label>Student Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Parent's Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label>Admission for Grade</label>
                <select required>
                  <option value="" disabled selected>Select Grade</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="5">Grade 5</option>
                  <option value="9">Grade 9</option>
                  <option value="11">Grade 11</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full submit-btn">
              Submit Application <Send size={18} className="ml-2" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AdmissionModal;
