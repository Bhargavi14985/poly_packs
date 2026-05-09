import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { ManufacturingVideo } from './components/ManufacturingVideo';
import { Products } from './components/Products';
import { Customization } from './components/Customization';
import { GeneralBrands } from './components/GeneralBrands';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-pastel-mint selection:text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <div className="h-px w-full max-w-7xl mx-auto bg-vasavi-gold/30 my-4" />
        <ManufacturingVideo />
        <div className="h-px w-full max-w-7xl mx-auto bg-vasavi-gold/30 my-4" />
        <Products />
        <div className="h-px w-full max-w-7xl mx-auto bg-vasavi-gold/30 my-4" />
        <Customization />
        <div className="h-px w-full max-w-7xl mx-auto bg-vasavi-gold/30 my-4" />
        <GeneralBrands />
        <div className="h-px w-full max-w-7xl mx-auto bg-vasavi-gold/30 my-4" />
        <WhyChooseUs />
        <div className="h-px w-full max-w-7xl mx-auto bg-vasavi-gold/30 my-4" />
        <EnquiryForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
