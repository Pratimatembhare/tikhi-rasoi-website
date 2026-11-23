import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // GSAP Mouse Parallax for floating elements
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;
      
      gsap.to('.parallax-item', {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105" // slight scale to prevent edges on parallax
        >
          <source src="https://player.vimeo.com/external/391428585.sd.mp4?s=d0411d33190ab7a662057d2a933f2da7164ff8db&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[2px] bg-[#D4AF37]"></span>
            <span className="subtitle !mb-0 tracking-[4px]">Authentic Indian Cuisine</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl capitalize mb-8 leading-[1.1]"
          >
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Thikhi Rasoi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl font-light"
          >
            Experience handcrafted Indian flavors prepared with fresh ingredients, 
            premium spices, and centuries-old traditional recipes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/menu" className="btn-primary group">
              Explore Menu
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="btn-outline group relative overflow-hidden">
              <span className="relative z-10">Order Now</span>
              <div className="absolute inset-0 bg-[#D4AF37] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out -z-0"></div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Food Elements (Mouse Parallax) */}
      <div className="absolute top-[20%] right-[15%] w-32 h-32 rounded-full overflow-hidden shadow-2xl parallax-item opacity-80 hidden lg:block z-10 border border-white/10">
        <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&auto=format&fit=crop" alt="Spice" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-[15%] right-[25%] w-40 h-40 rounded-full overflow-hidden shadow-2xl parallax-item opacity-90 hidden lg:block z-10 border border-[#D4AF37]/30">
        <img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&auto=format&fit=crop" alt="Dish" className="w-full h-full object-cover" />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
