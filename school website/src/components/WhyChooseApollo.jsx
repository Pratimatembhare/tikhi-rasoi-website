import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MonitorPlay, FlaskConical, Trophy, Laptop, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    title: "Experienced Faculty",
    description: "Highly qualified and dedicated teachers committed to student success.",
    icon: BookOpen,
    color: "text-primary-blue",
    bgColor: "bg-blue-50"
  },
  {
    title: "Smart Classrooms",
    description: "Interactive digital boards and modern infrastructure for engaging learning.",
    icon: MonitorPlay,
    color: "text-sky-blue",
    bgColor: "bg-cyan-50"
  },
  {
    title: "Science Labs",
    description: "Well-equipped practical laboratories for physics, chemistry, and biology.",
    icon: FlaskConical,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Sports Activities",
    description: "Extensive sports facilities encouraging physical fitness and teamwork.",
    icon: Trophy,
    color: "text-golden-yellow",
    bgColor: "bg-yellow-50"
  },
  {
    title: "Digital Learning",
    description: "Access to online resources, coding classes, and computer education.",
    icon: Laptop,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Safe Campus",
    description: "24/7 security, CCTV surveillance, and a safe environment for all students.",
    icon: ShieldCheck,
    color: "text-accent-red",
    bgColor: "bg-red-50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const WhyChooseApollo = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4"
          >
            Why Choose Apollo?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg font-body"
          >
            We provide a comprehensive educational experience that goes beyond textbooks, preparing students for the challenges of tomorrow.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="group p-8 rounded-3xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Glassmorphism gradient effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className={`w-16 h-16 rounded-2xl ${reason.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${reason.color}`} />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-3 group-hover:text-primary-blue transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 font-body leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Decorative corner accent */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gray-50 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseApollo;
