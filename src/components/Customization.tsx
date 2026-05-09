import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Printer, Palette, Ruler, Sparkles, Scissors } from 'lucide-react';

export function Customization() {
  const [activeTab, setActiveTab] = useState<'general' | 'mill'>('general');

  const features = [
    { icon: <Printer className="text-gray-700" />, text: 'Any brand name and artwork as per customer design' },
    { icon: <Palette className="text-pink-600" />, text: 'Up to 8 colours with high-quality printing' },
    { icon: <Ruler className="text-blue-600" />, text: 'Thickness as per requirement' },
    { icon: <Sparkles className="text-vasavi-gold" />, text: 'Gum lamination and metallic finish available' },
    { icon: <Scissors className="text-indigo-600" />, text: 'Any fabric brand, any colour (as per availability)' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Customization & Order Types
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex gap-4 mb-8 bg-gray-50 p-2 rounded-full">
              <button
                onClick={() => setActiveTab('general')}
                className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                  activeTab === 'general' 
                    ? 'bg-vasavi-gold text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                General Brand
              </button>
              <button
                onClick={() => setActiveTab('mill')}
                className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                  activeTab === 'mill' 
                    ? 'bg-vasavi-gold text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mill Brand
              </button>
            </div>

            <div className="h-32 relative">
              <AnimatePresence mode="wait">
                {activeTab === 'general' ? (
                  <motion.div
                    key="general"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col justify-center text-center px-4"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      No bulk requirement. Pre-printed general designs ready to ship. You can order <strong className="text-gray-900">any quantity</strong> you need.
                    </p>
                    <p className="text-sm text-gray-500">Contact by call, WhatsApp, or enquiry form.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mill"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col justify-center text-center px-4"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Custom printed with your specific mill brand and artwork. We accept <strong className="text-gray-900">bulk orders only</strong> for this category.
                    </p>
                    <p className="text-sm text-gray-500">Contact by call, WhatsApp, or enquiry form.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Customization Features */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-playfair font-bold text-2xl text-gray-900 mb-6 border-b border-vasavi-gold/30 pb-4 inline-block">
              Full Customization Available
            </h3>
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-4 bg-white/80 p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="bg-pastel-cream p-3 rounded-full shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
