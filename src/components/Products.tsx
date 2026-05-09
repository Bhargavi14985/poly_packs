import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: 'Rice Bags',
    emoji: '🌾',
    sizes: ['5kg', '10kg', '25kg', '30kg', '50kg'],
    color: 'bg-pastel-mint/40',
  },
  {
    id: 2,
    name: 'Dal Bags',
    emoji: '🫘',
    sizes: ['5kg', '10kg', '25kg', '30kg', '50kg'],
    color: 'bg-pastel-peach/40',
  },
  {
    id: 3,
    name: 'Flour Bags',
    emoji: '🥖', // Alternative to wheat to differentiate
    sizes: ['5kg', '10kg', '25kg', '30kg', '50kg'],
    color: 'bg-pastel-lavender/40',
  },
  {
    id: 4,
    name: 'Cem Bags',
    emoji: '🏗️',
    sizes: ['5kg', '10kg', '25kg', '30kg', '50kg'],
    color: 'bg-pastel-sage/40',
  },
  {
    id: 5,
    name: 'General Packaging',
    emoji: '📦',
    sizes: ['Custom Size', 'Custom Print'],
    color: 'bg-pastel-gold/40',
  },
];

export function Products() {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products & Sizes
          </h2>
          <div className="w-24 h-1 bg-vasavi-gold mx-auto rounded-full mix-blend-multiply opacity-60"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 8px 30px rgba(201,168,76,0.25)' }}
              className="bg-white rounded-3xl p-8 border border-vasavi-gold/10 shadow-sm transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-inner ${product.color}`}>
                  {product.emoji}
                </div>
                <h3 className="font-playfair font-bold text-2xl text-gray-900">{product.name}</h3>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Available Sizes</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span 
                      key={size}
                      className="px-3 py-1 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
