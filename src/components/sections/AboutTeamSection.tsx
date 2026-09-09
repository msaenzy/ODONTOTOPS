import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ABOUT_LEAD_TEXT, DOCTORS, CORE_VALUES } from '../../data/team';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  ScanLine,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  Quote,
  GraduationCap as DegreeIcon,
  Sparkles,
  UserCheck,
} from 'lucide-react';

const valueIcons: Record<string, React.ReactNode> = {
  ScanLine: <ScanLine className="w-5 h-5 text-[#1E2A6E]" strokeWidth={2.2} />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#7A2E8C]" strokeWidth={2.2} />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#1E2A6E]" strokeWidth={2.2} />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#7A2E8C]" strokeWidth={2.2} />,
};

export const AboutTeamSection: React.FC = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="nosotros"
      className="py-20 sm:py-28 bg-[#F4F6FB]"
      aria-label="Sobre nosotros y nuestro equipo médico de Odontops"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Especialistas Certificados"
          title="Sobre nosotros / Nuestro equipo"
          subtitle="Formación de posgrado y experiencia clínica dedicada para cuidar de tu salud bucal."
        />

        {/* Lead Text: Fade + Subtle Scale Animation */}
        <div
          ref={textRef}
          className={`max-w-4xl mx-auto bg-white p-7 sm:p-10 rounded-2xl border border-[#DCE4F5] shadow-xs mb-16 transition-all duration-700 ${
            textVisible
              ? 'opacity-100 scale-100'
              : 'opacity-80 scale-[0.98]'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#1E2A6E]/10 items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#1E2A6E]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-['Sora',sans-serif] text-lg sm:text-xl font-bold text-[#1E2A6E] mb-3">
                Quiénes somos
              </h3>
              <p className="font-['Work_Sans',sans-serif] text-base sm:text-lg text-[#12173A] leading-relaxed">
                {ABOUT_LEAD_TEXT}
              </p>
            </div>
          </div>
        </div>

        {/* 2 Doctor Cards with Staggered Entrance */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {DOCTORS.map((doctor, index) => (
            <div
              key={doctor.id}
              id={`doctor-card-${doctor.id}`}
              className={`bg-white rounded-2xl border border-[#DCE4F5] overflow-hidden shadow-xs hover:shadow-md transition-all duration-500 flex flex-col justify-between ${
                cardsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-80 translate-y-6'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div>
                {/* Header with clinical credentials and primary title (no images) */}
                <div className="p-6 sm:p-8 border-b border-[#F4F6FB]">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1E2A6E]/10 border border-[#1E2A6E]/20 flex items-center justify-center text-[#1E2A6E] shrink-0">
                      <UserCheck className="w-6 h-6 text-[#1E2A6E]" strokeWidth={2.2} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#7A2E8C]/10 text-[#7A2E8C] text-[11px] font-bold uppercase tracking-wider border border-[#7A2E8C]/20">
                      Especialista de Posgrado
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Sora',sans-serif] text-xl sm:text-2xl font-extrabold text-[#12173A] mb-1">
                      {doctor.name}
                    </h3>
                    <p className="font-['Sora',sans-serif] text-sm sm:text-base font-bold text-[#1E2A6E] mb-2">
                      {doctor.specialtyTitle}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#12173A]/70 font-medium">
                      <DegreeIcon className="w-4 h-4 text-[#7A2E8C]" />
                      <span>{doctor.education}</span>
                    </div>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Credentials / Studies */}
                  <div className="bg-[#F4F6FB] rounded-xl p-4 border border-[#DCE4F5]/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7A2E8C] mb-1">
                      Formación y Certificación
                    </p>
                    <p className="font-['Work_Sans',sans-serif] text-sm text-[#12173A] leading-relaxed mb-2">
                      {doctor.diplomaOrMaster}
                    </p>
                    <p className="font-['Work_Sans',sans-serif] text-xs text-[#12173A]/80 font-medium">
                      {doctor.experience}
                    </p>
                  </div>

                  {/* Doctor Quote */}
                  <div className="relative pl-4 border-l-2 border-[#7A2E8C] py-1">
                    <Quote className="w-4 h-4 text-[#7A2E8C] absolute -top-1 -left-2 bg-white" />
                    <p className="font-['Work_Sans',sans-serif] text-sm italic text-[#12173A]/85 leading-relaxed">
                      "{doctor.quote}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom booking nudge */}
              <div className="px-6 sm:px-8 py-4 bg-[#F4F6FB]/70 border-t border-[#DCE4F5] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#12173A]/70">
                  Kennedy Norte · Consulta especializada
                </span>
                <a
                  href={`https://wa.me/593993506516?text=${encodeURIComponent(
                    `Hola, me gustaría agendar una valoración con ${doctor.name} en Odontops.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#7A2E8C] hover:text-[#1E2A6E] transition-colors"
                >
                  Agendar con {doctor.name.split(' ')[1]} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Core Values */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE4F5]">
          <h4 className="font-['Sora',sans-serif] text-sm font-bold tracking-wider uppercase text-[#12173A]/70 text-center mb-6">
            Nuestros Valores Clínicos
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {CORE_VALUES.map((value) => (
              <div
                key={value.id}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F4F6FB] border border-[#DCE4F5]/50 hover:border-[#1E2A6E]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-2xs mb-3 border border-[#DCE4F5]">
                  {valueIcons[value.icon] || <ShieldCheck className="w-5 h-5 text-[#1E2A6E]" />}
                </div>
                <span className="font-['Sora',sans-serif] text-xs sm:text-sm font-bold text-[#12173A] leading-snug">
                  {value.title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
