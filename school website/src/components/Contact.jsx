import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactDetails = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: ["Apollo Convent H.S. School", "Balaghat, Madhya Pradesh", "India - 481001"]
    },
    {
      icon: <Phone size={24} />,
      title: "Contact Number",
      details: ["+91 98765 43210", "07142-234567"]
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: ["admissions@apolloconvent.edu", "info@apolloconvent.edu"]
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We'd love to hear from you. Reach out to us for any inquiries.
          </motion.p>
        </div>

        <div className="contact-grid">
          {contactDetails.map((info, index) => (
            <motion.div 
              className="contact-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="contact-icon">
                {info.icon}
              </div>
              <h4 className="contact-card-title">{info.title}</h4>
              <div className="contact-card-details">
                {info.details.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
