import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 15, label: 'Expert Chefs', suffix: '+' },
  { value: 120, label: 'Food Items', suffix: '+' },
  { value: 25, label: 'Happy Customers', suffix: 'K+' },
  { value: 4.9, label: 'Average Rating', suffix: '★', decimals: 1 }
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&auto=format&fit=crop)' }}
      ></div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#996515] mb-4">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={3}
                    decimals={stat.decimals || 0}
                    useEasing={true}
                  />
                ) : '0'}
                {stat.suffix}
              </div>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
