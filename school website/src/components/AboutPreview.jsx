import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/hero.png'; // Using this as fallback

const highlights = [
  "Quality Education with Modern Curriculum",
  "Strict Discipline & Values",
  "Innovative Teaching Methods",
  "Excellent Sports Facilities",
  "Holistic Personality Development"
];

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-blue to-sky-blue rounded-3xl opacity-20 blur-lg transform -rotate-3"></div>
              <div className="absolute -inset-4 bg-gradient-to-bl from-golden-yellow to-accent-red rounded-3xl opacity-20 blur-lg transform rotate-3"></div>
              
              <img 
                src={heroBg} 
                alt="School Building" 
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                onError={(e) => { e.target.src = '/building.jpg'; }}
              />
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-primary-blue font-heading font-bold text-4xl mb-1">20+</div>
                <div className="text-gray-600 font-body text-sm font-medium uppercase tracking-wide">Years of<br/>Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-primary-blue rounded-full font-semibold text-sm mb-6 uppercase tracking-wider">
              About Apollo Convent
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Nurturing Leaders of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-sky-blue">Tomorrow</span>
            </h2>
            <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed">
              At Apollo Convent Higher Secondary School, we believe in providing an environment where students can discover their true potential. Our holistic approach blends academic rigor with extracurricular excellence.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-3 text-gray-700 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle2 className="text-sky-blue flex-shrink-0" size={24} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <button className="bg-primary-blue text-white font-heading font-semibold py-3 px-8 rounded-xl hover:bg-blue-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Read More About Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
