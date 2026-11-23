import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const feedImages = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop',
];

const InstagramFeed = () => {
  return (
    <section className="bg-[#1A1A1A] pt-24">
      <div className="w-full">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="subtitle">Follow Us</span>
          <h2 className="text-4xl md:text-5xl">@thikhirasoi</h2>
          
          <button className="mt-8 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-black transition-colors inline-flex items-center gap-2">
            <FaInstagram size={16} /> Follow on Instagram
          </button>
        </div>

        <div className="flex flex-wrap w-full">
          {feedImages.map((img, index) => (
            <motion.div
              key={index}
              className="w-1/2 sm:w-1/3 md:w-1/5 relative overflow-hidden aspect-square cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={img} 
                alt={`Instagram ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-[#0B0B0B]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform scale-50 group-hover:scale-100 transition-transform duration-500 text-white">
                  <FaInstagram size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
