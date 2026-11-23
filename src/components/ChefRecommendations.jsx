import { motion } from 'framer-motion';

const ChefRecommendations = () => {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="subtitle">Master's Touch</span>
          <h2 className="text-4xl md:text-5xl">Chef's Recommendations</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div 
            className="flex-1 rounded-2xl overflow-hidden relative group cursor-pointer h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1544025162-831114b0b1cd?w=800&auto=format&fit=crop" 
              alt="Recommendation 1" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform transition-transform duration-500 group-hover:-translate-y-4">
              <div className="bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 inline-block rounded-full mb-3">
                Signature
              </div>
              <h3 className="text-3xl font-heading font-bold mb-2">Truffle Dal Makhani</h3>
              <p className="text-gray-300 mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                A luxurious fusion of our slow-cooked black lentils infused with premium black truffle oil, served with garlic naan.
              </p>
              <div className="font-heading text-2xl text-[#D4AF37] font-bold">$32</div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 rounded-2xl overflow-hidden relative group cursor-pointer h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop" 
              alt="Recommendation 2" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform transition-transform duration-500 group-hover:-translate-y-4">
              <div className="bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider py-1 px-3 inline-block rounded-full mb-3">
                New
              </div>
              <h3 className="text-3xl font-heading font-bold mb-2">Saffron Lobster Curry</h3>
              <p className="text-gray-300 mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Fresh coastal lobster tail simmered in a delicate coconut milk and Kashmiri saffron gravy.
              </p>
              <div className="font-heading text-2xl text-[#FF6B35] font-bold">$48</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommendations;
