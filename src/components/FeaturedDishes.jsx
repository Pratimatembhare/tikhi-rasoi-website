import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { FaLeaf } from 'react-icons/fa';
import { GiMeat } from 'react-icons/gi';

const dishes = [
  {
    id: 1,
    name: 'Murgh Makhani',
    description: 'Classic butter chicken simmered in a rich tomato gravy.',
    price: '$24',
    rating: '4.9',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Nizami Biryani',
    description: 'Fragrant basmati rice cooked with tender lamb and saffron.',
    price: '$28',
    rating: '4.8',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Paneer Tikka',
    description: 'Cottage cheese marinated in spices and grilled to perfection.',
    price: '$18',
    rating: '4.7',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1599487405270-81594ae8ae4c?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Dal Dalcha',
    description: 'Slow-cooked lentils with bone-in mutton and aromatic spices.',
    price: '$22',
    rating: '4.9',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Garlic Butter Naan',
    description: 'Traditional flatbread baked in a clay oven, topped with garlic.',
    price: '$6',
    rating: '4.9',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Malai Kofta',
    description: 'Potato and paneer balls in a rich, mildly sweet gravy.',
    price: '$20',
    rating: '4.8',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop'
  }
];

// Floating background icons
const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] text-[#D4AF37]"
      >
        <FaLeaf size={40} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] text-[#D4AF37]"
      >
        <FaLeaf size={50} />
      </motion.div>
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[5%] text-[#D4AF37]"
      >
        <FaLeaf size={30} />
      </motion.div>
    </div>
  );
};

const FeaturedDishes = () => {
  return (
    <section className="py-24 bg-[#0B0B0B] relative z-10 overflow-hidden" id="featured">
      <FloatingIcons />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-[#FF6B35]/10 text-[#FF6B35] font-bold px-4 py-1 rounded-full text-sm tracking-wider mb-4 border border-[#FF6B35]/20">
            🔥 Best Sellers
          </span>
          <h2 className="text-4xl md:text-5xl font-heading mb-4">Featured Dishes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
            Discover our most loved dishes, freshly prepared with authentic flavors and premium ingredients.
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 group relative hover:border-[#D4AF37]/50 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-black/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Veg/Non-Veg Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 shadow-lg">
                  {dish.type === 'veg' ? (
                    <FaLeaf className="text-green-500" size={14} />
                  ) : (
                    <GiMeat className="text-red-500" size={14} />
                  )}
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {dish.type}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10 shadow-lg">
                  <Star size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="text-sm font-bold text-white">{dish.rating}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col h-[calc(100%-16rem)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold font-heading text-white">{dish.name}</h3>
                  <span className="text-[#D4AF37] font-bold text-xl font-heading">{dish.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {dish.description}
                </p>
                
                {/* Ripple Effect Button */}
                <button className="w-full py-3.5 rounded-full border border-[#D4AF37] text-[#D4AF37] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black group/btn overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#D4AF37] scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    <ShoppingCart size={18} /> Order Now
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
