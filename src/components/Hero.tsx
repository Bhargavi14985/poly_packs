import { motion } from 'motion/react';
import { MessageCircle, FileText } from 'lucide-react';
import type { MouseEvent } from 'react';
import SpotlightBackground from '@/components/ui/spotlight-background';

export function Hero() {
  const whatsappUrl =
    'https://wa.me/919490343682?text=Hi%20Vasavi%20Polypacks%2C%20I%20need%20enquiry%20on%20bags.';

  const scrollToContact = (e: MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <SpotlightBackground>
        {/* Background with soft gold gradient and subtle noise/grain overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FFFBF0] to-[#FDF6E3] opacity-60">
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
          ></div>
        </div>

        {/* Decorative floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 w-64 h-64 bg-pastel-mint rounded-full blur-3xl opacity-40 z-0"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-10 w-72 h-72 bg-pastel-peach rounded-full blur-3xl opacity-40 z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 drop-shadow-sm">
                Colourful. Strong.
                <br /> Custom BOPP Bags.
              </span>
              {/* Soft gold shimmer effect using a pseudo-element logic in pure CSS or direct div overlay */}
              <motion.span
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-vasavi-gold/20 to-transparent bg-clip-text text-transparent pointer-events-none"
              />
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Manufacturer of high-quality BOPP laminated rice, dal, flour and cem bags — with mill
              brand and general brand printing as per customer requirement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={scrollToContact}
                className="flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
              >
                <FileText size={20} />
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </SpotlightBackground>
    </section>
  );
}
