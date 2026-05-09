import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, User, CheckCircle2 } from 'lucide-react';

export function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Hide toast after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pastel-mint/20 -skew-x-12 transform origin-top right-0 z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Discuss Your <br className="hidden md:block" /> Packaging Needs
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Get in touch with us for bulk orders, customized printing, or any general brand packaging requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-vasavi-gold/20 p-3 rounded-full text-amber-700 mt-1">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Contact Person</h4>
                  <p className="text-gray-700">Durga Rao</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-vasavi-gold/20 p-3 rounded-full text-amber-700 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone / WhatsApp</h4>
                  <a href="tel:+919490343682" className="text-gray-700 hover:text-vasavi-gold transition-colors">+91 94903 43682</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-vasavi-gold/20 p-3 rounded-full text-amber-700 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <a href="mailto:durgaraomunaganuri@gmail.com" className="text-gray-700 hover:text-vasavi-gold transition-colors">durgaraomunaganuri@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-vasavi-gold/20 p-3 rounded-full text-amber-700 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Address</h4>
                  <p className="text-gray-700">
                    Vasavi Polypacks<br />
                    Janapadu, 522413<br />
                    Palnadu District, Near HP Petrol Bunk
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/919490343682?text=Hi%20Vasavi%20Polypacks%2C%20I%20need%20enquiry%20on%20bags."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20bd5a] transition-colors shadow-sm"
              >
                Message on WhatsApp &rarr;
              </a>
            </div>
          </motion.div>

          {/* Right Column: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100"
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input required type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                  <input required type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product / Bag Type</label>
                  <select required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all bg-white">
                    <option value="">Select type...</option>
                    <option value="rice">Rice Bags</option>
                    <option value="dal">Dal Bags</option>
                    <option value="flour">Flour Bags</option>
                    <option value="cem">Cem Bags</option>
                    <option value="custom">Custom Bags</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brand Type</label>
                  <select required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all bg-white">
                    <option value="">Select brand...</option>
                    <option value="general">General Brand</option>
                    <option value="mill">Own / Mill Brand</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <select required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all bg-white">
                    <option value="">Select state...</option>
                    <option value="ap">Andhra Pradesh</option>
                    <option value="ts">Telangana</option>
                    <option value="ka">Karnataka</option>
                    <option value="tn">Tamil Nadu</option>
                    <option value="other">Other State</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                  <input required type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mandal</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                  <input required type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Approx Qty</label>
                  <input type="text" placeholder="e.g. 5000" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Requirement Details</label>
                <textarea rows={3} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vasavi-gold/50 focus:border-vasavi-gold outline-none transition-all resize-none"></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#8fb996] hover:bg-[#7ca583] text-white font-medium py-3 px-4 rounded-lg transition-colors mt-2"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 border border-gray-100"
          >
            <CheckCircle2 className="text-green-500 w-5 h-5" />
            <span className="text-gray-800 font-medium">Thank you! We'll contact you soon. 🎉</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
