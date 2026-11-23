import { motion } from 'framer-motion';
import { Leaf, Award, Clock, ShieldCheck, Flame, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Leaf size={32} />,
    title: 'Fresh Ingredients',
    description: 'We source the finest and freshest ingredients daily.'
  },
  {
    icon: <Award size={32} />,
    title: 'Master Chefs',
    description: 'Our culinary team brings decades of 5-star experience.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Fast Delivery',
    description: 'Hot and fresh food delivered to your doorstep quickly.'
  },
  {
    icon: <Flame size={32} />,
    title: 'Premium Quality',
    description: 'Uncompromising standards for every dish we serve.'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Affordable Price',
    description: 'Luxury dining experience at reasonable prices.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Hygienic Kitchen',
    description: 'Strict adherence to world-class hygiene standards.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="subtitle">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl">Why Choose Thikhi Rasoi</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#0B0B0B] p-10 rounded-2xl text-center border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 mx-auto bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:scale-110">
                {/* Wrap icon in a motion div for hover animation */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-heading tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
