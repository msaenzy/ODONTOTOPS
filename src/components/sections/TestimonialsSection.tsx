import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TESTIMONIAL_SLOTS } from '../../data/testimonials';
import { Star, MessageSquare, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number>(0);

  // Auto-advance loop every 4 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_SLOTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIAL_SLOTS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_SLOTS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setIsPaused(false);
  };

  return (
    <section
      id="testimonios"
      className="py-20 sm:py-28 bg-[#FFFFFF] overflow-hidden"
      aria-label="Testimonios de pacientes de Odontops"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Experiencias Reales"
          title="Testimonios de nuestros pacientes"
          subtitle="Valoramos la autenticidad: aquí compartiremos las opiniones y reseñas verificadas de quienes confían su sonrisa en nosotros."
        />

        {/* Carousel Container */}
        <div
          id="testimonials-carousel-wrapper"
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card View */}
          <div className="overflow-hidden rounded-3xl bg-[#F4F6FB] border border-[#DCE4F5] p-6 sm:p-10 shadow-xs relative">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIAL_SLOTS.map((slot, index) => (
                <div
                  key={slot.id}
                  className="w-full shrink-0 px-2 sm:px-6 flex flex-col items-center text-center"
                >
                  {/* Empty / Outline Stars as strictly specified */}
                  <div
                    className="flex items-center gap-1.5 mb-6"
                    aria-label="5 estrellas vacías pendientes de reseña real"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-[#1E2A6E]/40"
                        strokeWidth={1.8}
                        fill="none"
                      />
                    ))}
                  </div>

                  {/* Explicit Placeholder Text mandated in prompt */}
                  <div className="max-w-xl mx-auto my-3">
                    <p className="font-['Work_Sans',sans-serif] text-base sm:text-lg text-[#12173A]/85 italic leading-relaxed">
                      "{slot.placeholderText}"
                    </p>
                  </div>

                  {/* Slot identifier */}
                  <div className="mt-8 pt-4 border-t border-[#DCE4F5] w-full max-w-sm flex items-center justify-between text-xs text-[#12173A]/60">
                    <span className="font-semibold uppercase tracking-wider text-[#7A2E8C]">
                      Slot {index + 1} de {TESTIMONIAL_SLOTS.length}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Verificación en proceso
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-3 right-3 pointer-events-none">
              <button
                type="button"
                onClick={handlePrev}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 text-[#12173A] shadow-md flex items-center justify-center hover:bg-white hover:text-[#7A2E8C] transition-all focus-visible:outline-2 focus-visible:outline-[#7A2E8C]"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 text-[#12173A] shadow-md flex items-center justify-center hover:bg-white hover:text-[#7A2E8C] transition-all focus-visible:outline-2 focus-visible:outline-[#7A2E8C]"
                aria-label="Testimonio siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Controls: Indicator Dots & Pause toggle */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              {TESTIMONIAL_SLOTS.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentIndex(dotIndex)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#7A2E8C] ${
                    currentIndex === dotIndex
                      ? 'w-8 bg-[#7A2E8C]'
                      : 'w-2.5 bg-[#DCE4F5] hover:bg-[#1E2A6E]/30'
                  }`}
                  aria-label={`Ir al testimonio ${dotIndex + 1}`}
                  aria-current={currentIndex === dotIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-xs text-[#12173A]/60 hover:text-[#12173A] inline-flex items-center gap-1 p-1"
              aria-label={isPaused ? 'Reanudar carrusel automático' : 'Pausar carrusel automático'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#7A2E8C]" />
                  <span className="text-[11px]">Reanudar</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#1E2A6E]" />
                  <span className="text-[11px]">Pausa</span>
                </>
              )}
            </button>
          </div>

          {/* Note to the client */}
          <p className="text-center text-xs text-[#12173A]/50 mt-4 max-w-lg mx-auto">
            Nota de transparencia: Por política ética de Odontops, únicamente publicamos testimonios y casos clínicos con autorización expresa del paciente.
          </p>
        </div>
      </div>
    </section>
  );
};
