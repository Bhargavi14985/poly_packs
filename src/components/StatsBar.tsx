import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Factory, Box, Palette, Truck } from 'lucide-react';

function Counter({ end, suffix = '', duration = 2000, prefix = '' }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smoother counter
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(easeOutQuart * end));

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="font-playfair font-bold text-3xl md:text-4xl text-gray-900">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function StatsBar() {
  const stats = [
    {
      id: 1,
      icon: <Factory className="w-8 h-8 text-vasavi-gold mb-3 mx-auto" />,
      value: <Counter end={80000} />,
      label: 'Bags / Day',
      bgColor: 'bg-pastel-mint/30',
    },
    {
      id: 2,
      icon: <Box className="w-8 h-8 text-vasavi-gold mb-3 mx-auto" />,
      value: <span className="font-playfair font-bold text-3xl md:text-4xl text-gray-900">5kg – 50kg</span>,
      label: 'Sizes',
      bgColor: 'bg-pastel-peach/30',
    },
    {
      id: 3,
      icon: <Palette className="w-8 h-8 text-vasavi-gold mb-3 mx-auto" />,
      value: <Counter prefix="Up to " end={8} />,
      label: 'Colours',
      bgColor: 'bg-pastel-lavender/30',
    },
    {
      id: 4,
      icon: <Truck className="w-8 h-8 text-vasavi-gold mb-3 mx-auto" />,
      value: <span className="font-playfair font-bold text-3xl md:text-4xl text-gray-900">10–15</span>,
      label: 'Days Dispatch',
      bgColor: 'bg-pastel-sage/30',
    },
  ];

  return (
    <section className="py-12 -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${stat.bgColor} rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-white/50 backdrop-blur-sm`}
            >
              {stat.icon}
              <div className="mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
