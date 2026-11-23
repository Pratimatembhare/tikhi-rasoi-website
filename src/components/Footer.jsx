import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Spice Elements (Optional background accents) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:pr-8">
            <Link to="/" className="font-heading text-4xl font-black text-[#D4AF37] block mb-6">
              Thikhi Rasoi
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8">
              Experience the royal flavors of India with our authentic spices, 
              premium ingredients, and centuries-old culinary traditions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all hover:-translate-y-1" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all hover:-translate-y-1" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all hover:-translate-y-1" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all hover:-translate-y-1" aria-label="Youtube">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Menu', 'Gallery', 'Reservation'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-[#D4AF37] hover:pl-2 transition-all block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-white tracking-wide">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400">
                <FaMapMarkerAlt className="text-[#D4AF37] mt-1 shrink-0" size={18} />
                <span>123 Luxury Avenue, Fine Dining District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <FaPhoneAlt className="text-[#D4AF37] shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <FaEnvelope className="text-[#D4AF37] shrink-0" size={18} />
                <span>info@thikhirasoi.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-white tracking-wide">Working Hours</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-3 border-b border-white/10 border-dashed text-gray-400">
                <span>Mon - Fri:</span>
                <span className="font-medium text-white">11:30 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-white/10 border-dashed text-gray-400">
                <span>Sat - Sun:</span>
                <span className="font-medium text-white">11:30 AM - 11:30 PM</span>
              </li>
              <li className="mt-6 text-[#FF6B35] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
                Open on Holidays
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Thikhi Rasoi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
            
            {/* Back to Top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ml-4 w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
