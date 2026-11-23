import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const TodaySpecial = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      {/* Background with parallax effect via CSS */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=1920&auto=format&fit=crop)' }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 order-2 lg:order-1" data-aos="fade-right">
            <span className="subtitle">Chef's Masterpiece</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Tandoori Platter Royal</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              A majestic assortment of our finest tandoori delicacies. Includes 
              succulent malai tikka, spicy seekh kebabs, and our signature 
              tandoori prawns, all marinated in our secret blend of royal spices 
              and roasted in a traditional clay oven to smoky perfection.
            </p>
            
            <div className="flex items-center gap-8 mb-8">
              <div className="font-heading text-5xl font-bold text-[#D4AF37]">$45</div>
              <div className="line-through text-gray-500 text-2xl font-heading">$60</div>
              <div className="bg-[#FF6B35]/20 text-[#FF6B35] px-3 py-1 rounded-full text-sm font-bold border border-[#FF6B35]/30">
                25% OFF
              </div>
            </div>
            
            <button className="btn-primary w-full sm:w-auto">
              Order Special Now
            </button>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 relative w-full" data-aos="fade-left">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              {/* Steam Effect Wrapper */}
              <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden mix-blend-screen opacity-40">
                <motion.div
                  animate={{ y: [-20, -100], opacity: [0, 0.5, 0], scale: [1, 1.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-white/20 blur-[30px] rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ y: [-10, -120], opacity: [0, 0.4, 0], scale: [1, 2] }}
                  transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-white/20 blur-[40px] rounded-full"
                ></motion.div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800&auto=format&fit=crop" 
                alt="Tandoori Platter" 
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Chef Badge */}
            <motion.div 
              animate={{ rotate: [12, 18, 12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-[#D4AF37] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] border-4 border-[#0B0B0B] z-20"
            >
              <Award size={28} className="mb-1" />
              <span className="font-heading font-black text-sm md:text-base text-center leading-tight">Chef's<br/>Choice</span>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TodaySpecial;
