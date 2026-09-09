import React from 'react';
import { Logo } from '../ui/Logo';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { Instagram, MapPin, Clock, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#12173A] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Promise */}
          <div className="space-y-4">
            <Logo inverted={true} onClick={scrollToTop} />
            <p className="text-sm text-white/75 font-['Work_Sans',sans-serif] leading-relaxed pt-2">
              Especialistas certificados —no generalistas— diseñando tu sonrisa combinando estética, función y bienestar en Kennedy Norte.
            </p>
            <div className="pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#7A2E8C] text-white/90 hover:text-white transition-all text-xs font-semibold"
                aria-label="Seguir a Odontops en Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={2} />
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="font-['Sora',sans-serif] text-sm font-bold tracking-wider uppercase text-white/90">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm font-['Work_Sans',sans-serif] text-white/75">
              <li>
                <a href="#inicio" className="hover:text-[#7A2E8C] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="hover:text-[#7A2E8C] transition-colors">
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-[#7A2E8C] transition-colors">
                  Tratamientos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#7A2E8C] transition-colors">
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-[#7A2E8C] transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#7A2E8C] transition-colors">
                  Ubicación & Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ubicación y Horarios */}
          <div className="space-y-4">
            <h3 className="font-['Sora',sans-serif] text-sm font-bold tracking-wider uppercase text-white/90">
              Atención Clínica
            </h3>
            <div className="space-y-3 text-sm text-white/75 font-['Work_Sans',sans-serif]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7A2E8C] shrink-0 mt-0.5" strokeWidth={2} />
                <span>{CLINIC_INFO.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#7A2E8C] shrink-0 mt-0.5" strokeWidth={2} />
                <span>{CLINIC_INFO.hours}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#7A2E8C] shrink-0 mt-0.5" strokeWidth={2} />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Valoración por WhatsApp */}
          <div className="space-y-4">
            <h3 className="font-['Sora',sans-serif] text-sm font-bold tracking-wider uppercase text-white/90">
              Citas y Valoraciones
            </h3>
            <p className="text-sm text-white/75 leading-relaxed">
              Atendemos previa cita para garantizar un diagnóstico personalizado y sin esperas.
            </p>
            <a
              href={CLINIC_INFO.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-link"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-[#7A2E8C] hover:bg-[#632373] text-white font-['Sora',sans-serif] font-bold text-sm transition-colors shadow-sm"
            >
              Agendar valoración directa
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-['Work_Sans',sans-serif]">
          <p>
            © {currentYear} {CLINIC_INFO.brandName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Guayaquil, Ecuador</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
