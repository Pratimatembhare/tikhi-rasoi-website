import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react';
import './Highlights.css';

const highlightData = [
  {
    id: 1,
    icon: Users,
    end: 1500,
    suffix: '+',
    title: 'Students',
  },
  {
    id: 2,
    icon: GraduationCap,
    end: 80,
    suffix: '+',
    title: 'Expert Teachers',
  },
  {
    id: 3,
    icon: Award,
    end: 25,
    suffix: '+',
    title: 'Years of Excellence',
  },
  {
    id: 4,
    icon: BookOpen,
    end: 12,
    prefix: 'Class 1 to ',
    suffix: '',
    title: 'Education Levels',
  }
];

const Highlights = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="highlights-section">
      <div className="container">
        <div className="highlights-grid" ref={ref}>
          {highlightData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id} 
                className="highlight-card glass-card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="highlight-icon">
                  <Icon size={36} color="var(--primary-blue)" />
                </div>
                <div className="highlight-number">
                  {inView && (
                    <>
                      {item.prefix}
                      <CountUp 
                        end={item.end} 
                        duration={2.5} 
                        suffix={item.suffix}
                      />
                    </>
                  )}
                </div>
                <div className="highlight-title">{item.title}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
