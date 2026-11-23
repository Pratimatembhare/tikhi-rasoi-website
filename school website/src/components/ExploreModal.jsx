import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, MapPin } from 'lucide-react';
import './ExploreModal.css';

const indiaSchools = [
  {
    name: "The Doon School",
    location: "Dehradun, Uttarakhand",
    image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Mayo College",
    location: "Ajmer, Rajasthan",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Scindia School",
    location: "Gwalior, Madhya Pradesh",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Woodstock School",
    location: "Mussoorie, Uttarakhand",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=500&auto=format&fit=crop&q=60"
  }
];

const ExploreModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="modal-content explore-modal-content"
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
            <h2>Explore Top Schools in India</h2>
            <p>Discover some of the finest educational institutions across the country.</p>
          </div>

          <div className="schools-grid">
            {indiaSchools.map((school, index) => (
              <div className="school-card" key={index}>
                <div className="school-img-wrapper">
                  <img src={school.image} alt={school.name} />
                </div>
                <div className="school-info">
                  <h4>{school.name}</h4>
                  <div className="school-loc">
                    <MapPin size={14} color="var(--accent-yellow)" />
                    <span>{school.location}</span>
                  </div>
                  <button className="view-school-btn" onClick={() => alert(`Redirecting to ${school.name}...`)}>
                    View Details <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExploreModal;
