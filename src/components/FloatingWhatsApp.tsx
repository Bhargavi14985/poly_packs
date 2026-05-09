import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/919490343682?text=Hi%20Vasavi%20Polypacks%2C%20I%20need%20enquiry%20on%20bags.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] text-white p-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></div>
      <MessageCircle size={28} className="relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-gray-800 text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none border border-gray-100 font-medium font-nunito">
        Chat with us
      </span>
    </a>
  );
}
