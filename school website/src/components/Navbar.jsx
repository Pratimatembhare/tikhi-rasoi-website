import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

const Navbar = ({ onOpenAdmission }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admission' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="navbar-wrapper">
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : 'glass-dark-initial'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container nav-container">
        <a href="#" className="logo">
          <img src="/logo-hd.jpg" alt="Apollo Convent Logo" className="navbar-logo" />
          <div className="logo-text">
            <span className="school-name">APOLLO CONVENT</span>
            <span className="school-sub">Higher Secondary School</span>
          </div>
        </a>

        <div className="desktop-menu">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
            <Button className="nav-admission-btn" onClick={(e) => { e.preventDefault(); onOpenAdmission(); }}>
              Admission
            </Button>
          </div>

          <button 
            className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      </motion.nav>

      {/* Mobile Sidebar Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-sidebar-header">
              <span className="logo-text-mobile">Apollo Convent</span>
              <button className="close-sidebar-btn" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} color="var(--primary-blue)" />
              </button>
            </div>
            
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
                </li>
              ))}
              <li>
                <Button className="w-full mt-4 nav-admission-btn" onClick={(e) => { e.preventDefault(); onOpenAdmission(); setIsMobileMenuOpen(false); }}>
                  Admission
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
