import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { CLINIC_INFO, TREATMENT_OPTIONS } from '../../data/clinicInfo';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  Send,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface ContactLocationSectionProps {
  selectedTreatment?: string;
}

export const ContactLocationSection: React.FC<ContactLocationSectionProps> = ({
  selectedTreatment,
}) => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    treatment: selectedTreatment || 'Ortodoncia',
    preferredSchedule: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Update treatment if parent passes a preselected one
  React.useEffect(() => {
    if (selectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: selectedTreatment }));
    }
  }, [selectedTreatment]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanName = formData.name.trim() || 'un paciente interesado';
    const cleanTreatment = formData.treatment || 'Consulta odontológica';
    const cleanSchedule = formData.preferredSchedule.trim() || 'por coordinar';

    // Exact message structure specified in prompt:
    // "Hola, soy [Nombre]. Me interesa [Tratamiento] y mi horario preferente es [Horario]. ¿Podrían ayudarme a agendar?"
    const message = `Hola, soy ${cleanName}. Me interesa ${cleanTreatment} y mi horario preferente es ${cleanSchedule}. ¿Podrían ayudarme a agendar?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLINIC_INFO.rawWhatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab without backend
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="py-20 sm:py-28 bg-[#F4F6FB] overflow-hidden"
      aria-label="Ubicación y contacto de Odontops"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Agenda tu cita"
          title="Ubicación y contacto"
          subtitle="Atención personalizada y exclusiva en Cdla. Kennedy Norte. Pre-califica tu consulta y agenda en segundos."
        />

        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Column 1: Info & Booking Form (Slide-in from Left) */}
          <div
            className={`lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#DCE4F5] shadow-xs transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-85 -translate-x-4 lg:-translate-x-8'
            }`}
          >
            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pb-8 border-b border-[#DCE4F5]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E2A6E]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#1E2A6E]" />
                </div>
                <div>
                  <h4 className="font-['Sora',sans-serif] text-xs font-bold uppercase tracking-wider text-[#12173A]/60 mb-1">
                    Sector
                  </h4>
                  <p className="font-['Work_Sans',sans-serif] text-sm font-semibold text-[#12173A]">
                    {CLINIC_INFO.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7A2E8C]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#7A2E8C]" />
                </div>
                <div>
                  <h4 className="font-['Sora',sans-serif] text-xs font-bold uppercase tracking-wider text-[#12173A]/60 mb-1">
                    Horario
                  </h4>
                  <p className="font-['Work_Sans',sans-serif] text-sm font-semibold text-[#12173A]">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E2A6E]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#1E2A6E]" />
                </div>
                <div>
                  <h4 className="font-['Sora',sans-serif] text-xs font-bold uppercase tracking-wider text-[#12173A]/60 mb-1">
                    WhatsApp
                  </h4>
                  <p className="font-['Work_Sans',sans-serif] text-sm font-semibold text-[#12173A]">
                    {CLINIC_INFO.phoneDisplay}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Form to WhatsApp */}
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#7A2E8C]" />
                <h3 className="font-['Sora',sans-serif] text-xl font-bold text-[#12173A]">
                  Pre-califica tu valoración
                </h3>
              </div>
              <p className="font-['Work_Sans',sans-serif] text-sm text-[#12173A]/75 mb-6">
                Completa tus datos y serás dirigido a WhatsApp con tu solicitud pre-redactada para agendar de inmediato con nuestros especialistas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block font-['Sora',sans-serif] text-xs font-bold text-[#12173A] mb-1.5 uppercase tracking-wide"
                  >
                    Tu Nombre Completo *
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ej. María Elena Fernández"
                    className="w-full px-4 py-3 rounded-xl border border-[#DCE4F5] bg-[#F4F6FB]/50 text-[#12173A] placeholder-[#12173A]/40 text-sm focus:bg-white focus:border-[#7A2E8C] transition-all"
                  />
                </div>

                {/* Tratamiento de interés */}
                <div>
                  <label
                    htmlFor="booking-treatment"
                    className="block font-['Sora',sans-serif] text-xs font-bold text-[#12173A] mb-1.5 uppercase tracking-wide"
                  >
                    Tratamiento de Interés *
                  </label>
                  <select
                    id="booking-treatment"
                    name="treatment"
                    required
                    value={formData.treatment}
                    onChange={(e) =>
                      setFormData({ ...formData, treatment: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#DCE4F5] bg-[#F4F6FB]/50 text-[#12173A] text-sm focus:bg-white focus:border-[#7A2E8C] transition-all cursor-pointer"
                  >
                    {TREATMENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Horario preferente */}
                <div>
                  <label
                    htmlFor="booking-schedule"
                    className="block font-['Sora',sans-serif] text-xs font-bold text-[#12173A] mb-1.5 uppercase tracking-wide"
                  >
                    Horario Preferente *
                  </label>
                  <input
                    id="booking-schedule"
                    name="preferredSchedule"
                    type="text"
                    required
                    value={formData.preferredSchedule}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredSchedule: e.target.value,
                      })
                    }
                    placeholder="Ej. Mañanas (10:00 – 13:00) o Tardes (15:00 – 18:00)"
                    className="w-full px-4 py-3 rounded-xl border border-[#DCE4F5] bg-[#F4F6FB]/50 text-[#12173A] placeholder-[#12173A]/40 text-sm focus:bg-white focus:border-[#7A2E8C] transition-all"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    id="booking-submit-btn"
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full py-3.5 text-base font-bold shadow-sm hover:shadow-md"
                    icon={<Send className="w-4 h-4 text-white" />}
                  >
                    Enviar y Agendar por WhatsApp
                  </Button>
                </div>

                {formSubmitted && (
                  <div className="p-3 bg-[#1E2A6E]/10 rounded-xl text-xs text-[#1E2A6E] font-medium text-center">
                    Redirigiendo a WhatsApp... Si no se abrió la ventana,{' '}
                    <a
                      href={CLINIC_INFO.defaultWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold text-[#7A2E8C]"
                    >
                      haz clic aquí para abrir directamente
                    </a>.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Column 2: Google Maps Embed & "Abrir en Mapa" Button (Slide-in from Right) */}
          <div
            className={`lg:col-span-5 flex flex-col gap-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-85 translate-x-4 lg:translate-x-8'
            }`}
          >
            {/* Map Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#DCE4F5] shadow-xs flex flex-col">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1E2A6E]" />
                  <span className="font-['Sora',sans-serif] text-sm font-bold text-[#12173A]">
                    Sector Kennedy Norte
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#12173A]/60 bg-[#F4F6FB] px-2 py-0.5 rounded-md">
                  Guayaquil
                </span>
              </div>

              {/* Embedded Google Maps iframe centered on Cdla. Kennedy Norte, Guayaquil, Ecuador */}
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-[#DCE4F5] bg-[#E8EDF8]">
                <iframe
                  title="Mapa de ubicación Odontops en Kennedy Norte, Guayaquil"
                  src={CLINIC_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Button "Abrir en Mapa" exact URL as requested */}
              <div className="mt-4 pt-2">
                <Button
                  id="open-in-google-maps-btn"
                  variant="outline"
                  size="md"
                  href={CLINIC_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-sm font-bold"
                  icon={<ExternalLink className="w-4 h-4 text-[#1E2A6E]" />}
                >
                  Abrir en Mapa
                </Button>
              </div>
            </div>

            {/* Quick appointment highlight card */}
            <div className="bg-[#1E2A6E] text-white p-6 rounded-3xl shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-[#F4F6FB]/80 text-xs font-semibold uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-[#7A2E8C]" />
                <span>Atención Exclusiva</span>
              </div>
              <h4 className="font-['Sora',sans-serif] text-base font-bold mb-2">
                Dirección exacta con calle y suite
              </h4>
              <p className="text-xs text-white/80 font-['Work_Sans',sans-serif] leading-relaxed mb-4">
                Por comodidad y privacidad de nuestros pacientes, la ubicación exacta y número de consultorio en Kennedy Norte se confirma al momento de agendar tu cita.
              </p>
              <a
                href={CLINIC_INFO.defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/15 hover:bg-[#7A2E8C] px-3.5 py-2 rounded-xl transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Contactar recepción directa</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
