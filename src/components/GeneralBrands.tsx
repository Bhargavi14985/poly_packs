import { motion, useAnimationControls } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const brands = [
  "Gokul", "Delhi Darbar", "Bell", "Shimla Apple", "Anarkali", "Nawab", 
  "Annapurna Gold", "Lion", "Kurnool Special", "Kisan", "Jaguar", "Lakshmi", 
  "Bullet", "Royal Bullet", "5 Star", "Tajmahal Gold", "Tomato Gold", "JSR Rice", 
  "HMT Rice", "Classic Gold", "Golden Eagle", "Veer Shivaji", "Gajraj Evergreen", 
  "Aahar HMT Rice", "Cow", "Mezbaan", "Lal Badshah", "Raja Gajendra", 
  "Dawat Special", "Golden Cycle", "Kissan Tractor"
];

export function GeneralBrands() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Very basic infinite scroll calculation
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          General Brand Bags
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Ready general brand bags — no bulk requirement. Select from our wide range of popular market names.
        </motion.p>
      </div>

      <div className="relative py-8">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-pastel-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-pastel-cream to-transparent z-10 pointer-events-none" />

        {/* Marquee Container */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ 
              ease: "linear", 
              duration: 30, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
            className="flex gap-4 px-4 whitespace-nowrap min-w-max group-hover:[animation-play-state:paused]"
          >
            {/* Double the array for seamless looping visual */}
            {[...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx}
                className="bg-white px-6 py-3 rounded-full border border-vasavi-gold/20 shadow-sm text-gray-800 font-medium hover:bg-pastel-gold/20 hover:border-vasavi-gold hover:text-gray-900 transition-colors cursor-default"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 italic">
          * Customization available for colours, thickness and finishing across all general brand orders.
        </p>
      </div>
    </section>
  );
}
