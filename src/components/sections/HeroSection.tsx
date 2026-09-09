import React from 'react';
import { Button } from '../ui/Button';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { IMAGES } from '../../assets/img';
import { MessageCircle, ChevronDown, Award, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const h1Words = [
    'Especialistas',
    'certificados',
    'diseñando',
    'tu',
    'sonrisa',
    'en',
    'Kennedy',
    'Norte',
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] min-h-screen flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden bg-[#FFFFFF]"
      aria-label="Presentación principal de Odontops"
    >
      {/* Background Image & Architectural Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroClinic.src}
          alt={IMAGES.heroClinic.alt}
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          loading="eager"
        />
        {/* Soft, clinical light gradient overlay ensuring high contrast and AA text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Trust badges */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2A6E]/10 border border-[#1E2A6E]/15 text-[#1E2A6E] text-xs sm:text-sm font-semibold mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#7A2E8C]" strokeWidth={2.2} />
            <span>Guayaquil, Ecuador · Kennedy Norte</span>
            <span className="w-1 h-1 rounded-full bg-[#1E2A6E]" />
            <span className="flex items-center gap-1 text-[#7A2E8C]">
              <Award className="w-3.5 h-3.5" strokeWidth={2.2} /> +6 años
            </span>
          </div>

          {/* Staggered H1: Palabra por palabra */}
          <h1
            id="hero-main-title"
            className="font-['Sora',sans-serif] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#12173A] tracking-tight leading-[1.12] mb-6"
          >
            {h1Words.map((word, index) => (
              <span
                key={index}
                className="inline-block mr-2.5 sm:mr-3.5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 duration-500 fill-mode-backwards"
                style={{
                  animationDelay: `${index * 80}ms`,
                  // Highlight Kennedy Norte or sonrisa subtly if desired
                  color: word === 'Kennedy' || word === 'Norte' ? '#1E2A6E' : undefined,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subheadline (copy exacto) */}
          <p
            id="hero-subheadline"
            className="font-['Work_Sans',sans-serif] text-base sm:text-xl text-[#12173A]/85 leading-relaxed max-w-2xl mb-8 sm:mb-10 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 duration-700 delay-300"
          >
            Ortodoncia, estética, implantes y rehabilitación oral con más de 6 años ganándonos la confianza de Guayaquil, un paciente a la vez.
          </p>

          {/* CTAs: Primario (WhatsApp) & Secundario (Ver tratamientos) */}
          <div
            id="hero-cta-group"
            className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 sm:gap-4 motion-safe:animate-in motion-safe:fade-in duration-700 delay-500"
          >
            {/* CTA Primario: WhatsApp */}
            <Button
              id="hero-primary-whatsapp-cta"
              variant="accent"
              size="lg"
              href={CLINIC_INFO.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-bold shadow-md hover:shadow-lg"
              icon={<MessageCircle className="w-5 h-5 text-white" strokeWidth={2.5} />}
            >
              Agendar por WhatsApp
            </Button>

            {/* CTA Secundario: Ver tratamientos */}
            <Button
              id="hero-secondary-treatments-cta"
              variant="secondary"
              size="lg"
              href="#tratamientos"
              className="text-base sm:text-lg font-bold border border-[#DCE4F5]"
            >
              Ver tratamientos
            </Button>
          </div>

          {/* Credibility micro-bar */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-[#12173A]/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-['Work_Sans',sans-serif] text-[#12173A]/80">
            <div>
              <p className="font-['Sora',sans-serif] font-bold text-[#1E2A6E] text-base sm:text-lg">2 Especialistas</p>
              <p className="text-xs text-[#12173A]/70">Certificados de posgrado</p>
            </div>
            <div>
              <p className="font-['Sora',sans-serif] font-bold text-[#7A2E8C] text-base sm:text-lg">+7 Años</p>
              <p className="text-xs text-[#12173A]/70">Experiencia en cada área</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-['Sora',sans-serif] font-bold text-[#12173A] text-base sm:text-lg">Sin Esperas</p>
              <p className="text-xs text-[#12173A]/70">Atención con previa cita</p>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle indicator to scroll */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center sm:justify-start pt-2">
        <a
          href="#por-que-elegirnos"
          className="inline-flex items-center gap-1.5 text-xs text-[#12173A]/60 hover:text-[#7A2E8C] transition-colors py-1"
          aria-label="Desplazarse a Por qué elegirnos"
        >
          <span>Conoce nuestro enfoque</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
