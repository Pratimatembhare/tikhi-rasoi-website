import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Pencil, Beaker, GraduationCap, ArrowRight } from 'lucide-react';
import './Academics.css';

const academicsData = [
  {
    title: 'Primary',
    classes: 'Class 1 – 5',
    description: 'Building a strong foundation with interactive learning and creative activities.',
    icon: Pencil,
    color: '#00AEEF'
  },
  {
    title: 'Middle',
    classes: 'Class 6 – 8',
    description: 'Fostering critical thinking and encouraging conceptual understanding.',
    icon: BookOpen,
    color: '#FFC107'
  },
  {
    title: 'Secondary',
    classes: 'Class 9 – 10',
    description: 'Preparing students for board exams with focused academic rigor.',
    icon: Beaker,
    color: '#0A2540'
  },
  {
    title: 'Higher Secondary',
    classes: 'Class 11 – 12',
    description: 'Specialized streams with expert guidance for future career paths.',
    icon: GraduationCap,
    color: '#28a745'
  }
];

const Academics = () => {
  return (
    <section className="academics-section" id="academics">
      <div className="container">
        <div className="section-title">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="subtitle text-center">Our Curriculum</h4>
            <h2>Academic Excellence</h2>
            <p>Comprehensive educational programs designed to nurture intellectual growth at every stage.</p>
          </motion.div>
        </div>

        <div className="cards-grid">
          {academicsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="academic-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="card-icon-wrapper" style={{ backgroundColor: `${item.color}15` }}>
                  <Icon size={32} color={item.color} />
                </div>
                <div className="card-content">
                  <span className="classes-badge" style={{ color: item.color, backgroundColor: `${item.color}15` }}>
                    {item.classes}
                  </span>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                  <a href="#" className="card-link" style={{ color: item.color }}>
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Academics;
