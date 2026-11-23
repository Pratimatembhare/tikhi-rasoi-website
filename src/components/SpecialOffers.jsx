import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpecialOffers = () => {
  // Simple countdown logic
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="subtitle">Exclusive</span>
          <h2 className="text-4xl md:text-5xl">Special Offers</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Main Banner */}
          <motion.div 
            className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group border border-[#D4AF37]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop" 
                alt="Festival Offer" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-500"></div>
            </div>

            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block bg-[#FF6B35] text-white font-bold px-4 py-1 rounded-full mb-4 text-sm"
                >
                  FESTIVAL OFFER
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                  Grand Diwali Feast
                </h3>
                <p className="text-gray-300 text-lg mb-6 max-w-md">
                  Experience the ultimate celebration with our 7-course tasting menu. Includes unlimited complimentary premium drinks.
                </p>
                <button className="btn-primary">Claim 30% OFF</button>
              </div>

              {/* Countdown Timer */}
              <div className="glass-panel p-6 rounded-2xl flex gap-4 md:gap-6 shrink-0 border border-[#D4AF37]/20 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-black/60 rounded-xl flex items-center justify-center font-heading text-3xl md:text-4xl font-bold text-[#D4AF37] border border-white/10 shadow-inner">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest mt-2 text-gray-400">{unit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sub Banners */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden group h-[300px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="https://images.unsplash.com/photo-1544025162-831114b0b1cd?w=800&auto=format&fit=crop" alt="Family Combo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-center max-w-[70%]">
              <span className="text-[#D4AF37] font-bold text-xl mb-1">20% Flat Discount</span>
              <h3 className="text-3xl font-heading font-bold mb-4">Family Combo</h3>
              <button className="text-sm uppercase tracking-widest border-b border-white hover:text-[#D4AF37] hover:border-[#D4AF37] self-start transition-colors pb-1">Order Now</button>
            </div>
          </motion.div>

          <motion.div 
            className="relative rounded-2xl overflow-hidden group h-[300px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1577905869766-3d7122b5e283?w=800&auto=format&fit=crop" alt="Weekend Offer" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-center max-w-[70%]">
              <span className="text-[#FF6B35] font-bold text-xl mb-1">Buy 1 Get 1 Free</span>
              <h3 className="text-3xl font-heading font-bold mb-4">Weekend Brunch</h3>
              <button className="text-sm uppercase tracking-widest border-b border-white hover:text-[#D4AF37] hover:border-[#D4AF37] self-start transition-colors pb-1">Book Table</button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
