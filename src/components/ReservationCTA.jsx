import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReservationCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0B0B0B]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&auto=format&fit=crop)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="glass-panel p-10 md:p-16 rounded-3xl text-center border-t border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Book Your Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Reserve Your Table Today
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Whether it's a romantic dinner, a family gathering, or a business lunch, 
            we guarantee an unforgettable culinary journey in our luxurious ambiance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/reservation" className="btn-primary w-full sm:w-auto px-10 text-lg">
              <Calendar size={20} className="mr-2" />
              Book Table
            </Link>
            <a href="tel:+15551234567" className="btn-outline w-full sm:w-auto px-10 text-lg group">
              <Phone size={20} className="mr-2 group-hover:animate-bounce" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationCTA;
