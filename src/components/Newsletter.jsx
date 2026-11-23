import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <span className="subtitle">Stay Updated</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Join Our Secret Society
            </h2>
            <p className="text-gray-400 text-lg">
              Subscribe to our newsletter and be the first to know about seasonal menus, 
              exclusive chef's table events, and secret recipes.
            </p>
          </div>
          
          <div className="flex-1 w-full max-w-md relative z-10">
            <form className="relative flex items-center mb-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-16 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all font-body"
              />
              <button 
                type="submit" 
                className="absolute right-2 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black hover:bg-[#F3E5AB] hover:scale-105 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              >
                <Send size={20} className="ml-1" />
              </button>
            </form>
            <p className="text-sm text-gray-500 text-center md:text-right">
              We respect your privacy. No spam guaranteed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
