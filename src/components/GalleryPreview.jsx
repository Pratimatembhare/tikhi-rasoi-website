import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaExpand } from 'react-icons/fa';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryItems = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { type: 'video', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' }, // pretending it's a video thumbnail
  { type: 'image', src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
];

const GalleryPreview = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);

  const openLightbox = (item) => {
    setCurrentMedia(item);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="subtitle">Ambiance & Food</span>
          <h2 className="text-4xl md:text-5xl">Our Gallery</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px] mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.colSpan} ${item.rowSpan} relative overflow-hidden rounded-xl group cursor-pointer h-64 md:h-auto`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(item)}
            >
              <img 
                src={item.src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {item.type === 'video' ? (
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-300">
                    <FaPlay size={20} className="ml-1" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-300">
                    <FaExpand size={24} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Link to="/gallery" className="btn-outline">
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={currentMedia.src}
              alt="Lightbox"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;
