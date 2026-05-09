import { motion } from 'motion/react';
import { MapPin, PackageOpen, Users, Receipt } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-gray-900 mb-6"
          >
            About Vasavi Polypacks
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Vasavi Polypacks manufactures BOPP laminated packaging bags for rice, dal, flour, 
            cem and food grains, serving mills, traders, and wholesalers with bulk, 
            customized packaging solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location */}
          <motion.a 
            href="https://maps.app.goo.gl/zzAMfhYbEwrK4WzZA"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(201,168,76,0.15)' }}
            className="block bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="bg-pastel-mint/50 p-3 rounded-full text-green-700 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Janapadu, 522413, Palnadu District, Near HP Petrol Bunk</p>
                <span className="text-vasavi-gold text-sm font-semibold mt-3 inline-block group-hover:underline">View on Google Maps &rarr;</span>
              </div>
            </div>
          </motion.a>

          {/* Order Type */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(201,168,76,0.15)' }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="bg-pastel-peach/50 p-3 rounded-full text-orange-700">
                <PackageOpen size={24} />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-gray-900 mb-2">Order Type</h3>
                <p className="text-gray-600">
                  <strong className="text-gray-800">Mill brand:</strong> Bulk orders.<br/>
                  <strong className="text-gray-800">General brand:</strong> Any quantity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Partners */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(201,168,76,0.15)' }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="bg-pastel-lavender/50 p-3 rounded-full text-purple-700">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-gray-900 mb-2">Partners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Durga Rao M, Nageswarao D, Mallicarjuna Rao G, Srinivasa Rao Ch, Prasanna B
                </p>
              </div>
            </div>
          </motion.div>

          {/* GST */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(201,168,76,0.15)' }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="bg-pastel-gold/50 p-3 rounded-full text-yellow-700">
                <Receipt size={24} />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-gray-900 mb-2">GST Details</h3>
                <p className="text-gray-600">
                  We are a fully GST registered manufacturing unit. Details are available upon request for B2B billing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
