export function Footer() {
  return (
    <footer className="bg-[#fcf9f2] border-t border-vasavi-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
              <span className="text-2xl">🛍️</span>
              <span className="font-playfair font-bold text-xl text-gray-900 tracking-wide">
                VASAVI POLYPACKS
              </span>
            </div>
            <p className="text-gray-600 italic">Premium BOPP Laminated Bags</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-playfair font-bold text-gray-900 mb-4 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-vasavi-gold transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-vasavi-gold transition-colors">Products</a></li>
              <li><a href="#why-us" className="text-gray-600 hover:text-vasavi-gold transition-colors">Why Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-vasavi-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-playfair font-bold text-gray-900 mb-4 tracking-wider uppercase text-sm">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-gray-600">Janapadu, 522413, Palnadu</p>
              <p><a href="tel:+919490343682" className="text-gray-600 hover:text-vasavi-gold transition-colors">+91 94903 43682</a></p>
              <p><a href="mailto:durgaraomunaganuri@gmail.com" className="text-gray-600 hover:text-vasavi-gold transition-colors text-sm break-all">durgaraomunaganuri@gmail.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-vasavi-gold/10 pt-8 mt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vasavi Polypacks. All rights reserved.
          </p>
          <div className="text-sm text-gray-400">
            Design inspired by pastel aesthetics.
          </div>
        </div>
      </div>
    </footer>
  );
}
