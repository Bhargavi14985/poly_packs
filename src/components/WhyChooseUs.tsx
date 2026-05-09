import { motion } from 'motion/react';
import { ShieldCheck, Factory, PenTool, Truck } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'High Quality',
    description: 'Drop testing and strict quality checks before dispatch.',
    icon: <ShieldCheck className="w-10 h-10 text-vasavi-gold" />,
    color: 'bg-pastel-mint',
  },
  {
    id: 2,
    title: 'Large Capacity',
    description: 'Daily production capacity up to 80,000 bags.',
    icon: <Factory className="w-10 h-10 text-vasavi-gold" />,
    color: 'bg-pastel-peach',
  },
  {
    id: 3,
    title: 'Custom Design',
    description: 'Brand name, colours, and artwork fully customizable.',
    icon: <PenTool className="w-10 h-10 text-vasavi-gold" />,
    color: 'bg-pastel-lavender',
  },
  {
    id: 4,
    title: 'Reliable Dispatch',
    description: 'Dispatch 10–15 days after order confirmation.',
    icon: <Truck className="w-10 h-10 text-vasavi-gold" />,
    color: 'bg-pastel-sage',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Us
          </motion.h2>
          <div className="w-24 h-1 bg-vasavi-gold mx-auto rounded-full mix-blend-multiply opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(201,168,76,0.15)' }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-all"
            >
              <div
                className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center ${feature.color}/40 group-hover:scale-110 transition-transform duration-300 shadow-inner`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="font-playfair font-bold text-2xl text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
