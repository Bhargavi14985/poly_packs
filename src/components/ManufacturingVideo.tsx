import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function ManufacturingVideo() {
  return (
    <section className="py-16 md:py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Inside Our Manufacturing Unit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Watch the complete BOPP bag manufacturing process at our industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden aspect-video bg-gray-900 group cursor-pointer shadow-xl border-4 border-vasavi-gold/20"
        >
          {/* Placeholder for Video Thumbnail / Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-600 mix-blend-multiply opacity-80 transition-opacity group-hover:opacity-60" />
          
          <img 
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Manufacturing Facility Placeholder" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-vasavi-gold/30 p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-vasavi-gold ml-2" fill="currentColor" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
