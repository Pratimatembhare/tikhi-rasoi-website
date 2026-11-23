import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Food Critic',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop',
    text: 'An absolute masterpiece of culinary art. The flavors at Thikhi Rasoi transported me straight to the royal courts of Rajasthan. The attention to detail is unmatched and the service is impeccable.'
  },
  {
    name: 'Michael Chen',
    role: 'Local Guide',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop',
    text: 'Best Indian fine dining experience in the city. The Truffle Naan and Dal Makhani are simply out of this world. The ambiance is pure luxury and makes you feel like royalty.'
  },
  {
    name: 'Priya Sharma',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop',
    text: 'We celebrated our anniversary here and it was magical. The staff went above and beyond, and the tasting menu was a journey of extraordinary flavors. Highly recommended!'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="subtitle">Guest Experiences</span>
          <h2 className="text-4xl md:text-5xl">Customer Testimonials</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16" // Space for pagination bullets
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1A1A1A] p-10 md:p-16 rounded-3xl relative border border-white/5 shadow-2xl">
                  {/* Decorative Quote Icon */}
                  <Quote size={80} className="absolute top-10 right-10 text-[#D4AF37] opacity-10 rotate-180" />
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-light text-gray-300 italic leading-relaxed mb-10 relative z-10">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-xl">{testimonial.name}</h4>
                      <span className="text-[#D4AF37] text-sm uppercase tracking-widest">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
