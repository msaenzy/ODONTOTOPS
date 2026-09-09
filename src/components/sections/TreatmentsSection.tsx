import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TREATMENTS } from '../../data/treatments';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { CLINIC_INFO } from '../../data/clinicInfo';
import {
  Sparkles,
  ShieldCheck,
  Smile,
  SunMedium,
  Activity,
  CheckCircle2,
  Compass,
  Shield,
  Stethoscope,
  Layers,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" strokeWidth={2} />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" strokeWidth={2} />,
  Smile: <Smile className="w-5 h-5" strokeWidth={2} />,
  SunMedium: <SunMedium className="w-5 h-5" strokeWidth={2} />,
  Activity: <Activity className="w-5 h-5" strokeWidth={2} />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" strokeWidth={2} />,
  Compass: <Compass className="w-5 h-5" strokeWidth={2} />,
  Shield: <Shield className="w-5 h-5" strokeWidth={2} />,
  Stethoscope: <Stethoscope className="w-5 h-5" strokeWidth={2} />,
  Layers: <Layers className="w-5 h-5" strokeWidth={2} />,
  RefreshCw: <RefreshCw className="w-5 h-5" strokeWidth={2} />,
};

interface TreatmentsSectionProps {
  onSelectTreatmentForBooking?: (treatmentName: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatmentForBooking,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const handleTreatmentClick = (treatmentTitle: string) => {
    if (onSelectTreatmentForBooking) {
      onSelectTreatmentForBooking(treatmentTitle);
    }
  };

  return (
    <section
      id="tratamientos"
      className="py-20 sm:py-28 bg-[#FFFFFF]"
      aria-label="Tratamientos odontológicos en Odontops"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Nuestros Servicios"
          title="Oferta / Tratamientos"
          subtitle="Procedimientos integrales y especializados en odontología general, ortodoncia, rehabilitación oral y estética."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {TREATMENTS.map((treatment, index) => {
            const isHighlight = treatment.highlight;
            return (
              <div
                key={treatment.id}
                id={`treatment-card-${treatment.id}`}
                className={`group relative rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-[#F4F6FB] border-[#1E2A6E]/25 hover:border-[#1E2A6E] hover:shadow-md'
                    : 'bg-white border-[#DCE4F5] hover:border-[#7A2E8C]/30 hover:shadow-md'
                } ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-85 translate-y-3 sm:translate-y-4'
                }`}
                style={{
                  transitionDelay: `${(index % 6) * 70}ms`,
                }}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isHighlight
                          ? 'bg-[#1E2A6E] text-white'
                          : 'bg-[#F4F6FB] text-[#7A2E8C] group-hover:bg-[#7A2E8C] group-hover:text-white'
                      }`}
                    >
                      {iconMap[treatment.icon] || <Smile className="w-5 h-5" />}
                    </div>

                    {isHighlight && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1E2A6E]/10 text-[#1E2A6E]">
                        Especialidad
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-['Sora',sans-serif] text-base sm:text-lg font-bold text-[#12173A] mb-2 group-hover:text-[#1E2A6E] transition-colors leading-snug">
                    {treatment.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Work_Sans',sans-serif] text-sm text-[#12173A]/75 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>

                {/* Bottom link to book WhatsApp or jump to form */}
                <div className="mt-6 pt-3 border-t border-black/5 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.rawWhatsAppNumber}?text=${encodeURIComponent(
                      `Hola, me interesa agendar una valoración para el tratamiento de: ${treatment.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleTreatmentClick(treatment.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A2E8C] group-hover:text-[#1E2A6E] transition-colors"
                  >
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Banner for WhatsApp conversion */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#1E2A6E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="font-['Sora',sans-serif] text-lg sm:text-xl font-bold mb-1">
              ¿No estás seguro de qué tratamiento requieres?
            </h4>
            <p className="text-sm text-white/80 font-['Work_Sans',sans-serif]">
              Agendamos una valoración diagnóstica personalizada para evaluar tu salud bucal integral.
            </p>
          </div>
          <a
            href={CLINIC_INFO.defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#7A2E8C] hover:bg-[#632373] text-white font-['Sora',sans-serif] font-bold text-sm transition-colors shadow-xs inline-flex items-center gap-2"
          >
            <span>Pedir valoración</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
