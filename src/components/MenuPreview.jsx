import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Starters',
    items: [
      { name: 'Samosa Chaat', desc: 'Crispy pastry topped with yogurt and chutneys', price: '$8' },
      { name: 'Chicken Tikka', desc: 'Spiced and grilled chicken chunks', price: '$12' }
    ]
  },
  {
    title: 'Main Course',
    items: [
      { name: 'Butter Chicken', desc: 'Creamy tomato curry with tandoori chicken', price: '$24' },
      { name: 'Lamb Rogan Josh', desc: 'Slow-cooked aromatic lamb curry', price: '$26' }
    ]
  },
  {
    title: 'Fast Food',
    items: [
      { name: 'Bombay Vada Pav', desc: 'Spicy potato dumpling in a bread bun', price: '$7' },
      { name: 'Paneer Wrap', desc: 'Grilled paneer wrapped in flaky paratha', price: '$10' }
    ]
  },
  {
    title: 'Chinese',
    items: [
      { name: 'Chilli Chicken', desc: 'Indo-Chinese style spicy tossed chicken', price: '$18' },
      { name: 'Hakka Noodles', desc: 'Wok-tossed noodles with veggies', price: '$14' }
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Gulab Jamun', desc: 'Milk dumplings in rose syrup', price: '$8' },
      { name: 'Rasmalai', desc: 'Cottage cheese discs in sweetened milk', price: '$9' }
    ]
  },
  {
    title: 'Drinks',
    items: [
      { name: 'Mango Lassi', desc: 'Sweet and creamy mango yogurt drink', price: '$6' },
      { name: 'Masala Chai', desc: 'Indian spiced tea', price: '$4' }
    ]
  }
];

const MenuPreview = () => {
  return (
    <section className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="subtitle">Culinary Delights</span>
          <h2 className="text-4xl md:text-5xl">Signature Menu Preview</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-heading text-[#D4AF37] mb-6 border-b border-white/10 pb-3">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex items-end gap-4 mb-2">
                      <h4 className="font-bold text-lg leading-none group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                      <div className="flex-grow border-b-2 border-dotted border-white/20 mb-1"></div>
                      <span className="font-heading font-bold text-[#FF6B35] leading-none">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20" data-aos="fade-up">
          <Link to="/menu" className="btn-outline">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
