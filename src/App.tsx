import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { TreatmentsSection } from './components/sections/TreatmentsSection';
import { AboutTeamSection } from './components/sections/AboutTeamSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactLocationSection } from './components/sections/ContactLocationSection';
import { CLINIC_INFO } from './data/clinicInfo';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>('Ortodoncia');

  const handleSelectTreatment = (treatmentName: string) => {
    // Map treatment titles to form options
    if (treatmentName.toLowerCase().includes('ortodoncia') || treatmentName.toLowerCase().includes('ortopedia')) {
      setSelectedTreatment('Ortodoncia');
    } else if (treatmentName.toLowerCase().includes('estética') || treatmentName.toLowerCase().includes('blanqueamiento')) {
      setSelectedTreatment('Estética/Blanqueamiento');
    } else if (
      treatmentName.toLowerCase().includes('implante') ||
      treatmentName.toLowerCase().includes('rehabilitación') ||
      treatmentName.toLowerCase().includes('prótesis')
    ) {
      setSelectedTreatment('Implantes/Rehabilitación');
    } else if (treatmentName.toLowerCase().includes('limpieza') || treatmentName.toLowerCase().includes('restauración')) {
      setSelectedTreatment('Limpieza/Restauración');
    } else {
      setSelectedTreatment('Otro');
    }

    // Smooth scroll to contact section
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#12173A]">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Sections (Strict Order) */}
      <main className="flex-1">
        {/* 1. Hero (100vh) */}
        <HeroSection />

        {/* 2. Por qué elegirnos */}
        <WhyUsSection />

        {/* 3. Oferta / Tratamientos */}
        <TreatmentsSection onSelectTreatmentForBooking={handleSelectTreatment} />

        {/* 4. Sobre nosotros / Nuestro equipo */}
        <AboutTeamSection />

        {/* 5. Testimonios (carrusel loop continuo) */}
        <TestimonialsSection />

        {/* 6. Ubicación y contacto */}
        <ContactLocationSection selectedTreatment={selectedTreatment} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button for Mobile & Desktop */}
      <aside aria-label="Acceso rápido de mensajería" className="fixed bottom-6 right-6 z-40">
        <a
          id="floating-whatsapp-action-btn"
          href={CLINIC_INFO.defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#7A2E8C] hover:bg-[#632373] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#1E2A6E]"
          aria-label="Abrir conversación en WhatsApp con Odontops"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-['Sora',sans-serif] text-xs font-bold tracking-wide">
            Escribir por WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
