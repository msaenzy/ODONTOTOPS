import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { WHY_US_ITEMS } from '../../data/whyUs';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { UserCheck, Stethoscope, Clock } from 'lucide-react';

const icons = [
  <UserCheck key="1" className="w-6 h-6 text-[#7A2E8C]" strokeWidth={2.2} />,
  <Stethoscope key="2" className="w-6 h-6 text-[#1E2A6E]" strokeWidth={2.2} />,
  <Clock key="3" className="w-6 h-6 text-[#7A2E8C]" strokeWidth={2.2} />,
];

export const WhyUsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="por-que-elegirnos"
      className="py-20 sm:py-28 bg-[#F4F6FB] transition-colors"
      aria-label="Por qué elegirnos en Odontops"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Nuestra Diferencia"
          title="Por qué elegirnos"
          subtitle="Una atención dental odontológica diseñada con rigor científico, respaldo técnico y un trato genuinamente humano."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {WHY_US_ITEMS.map((item, index) => (
            <div
              key={item.id}
              id={`why-us-card-${item.id}`}
              className={`bg-white rounded-2xl p-7 sm:p-8 border border-[#DCE4F5] shadow-xs hover:shadow-md transition-all duration-300 transform flex flex-col justify-between ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-70 translate-y-4 sm:translate-y-6'
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div>
                {/* Header with icon and badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F4F6FB] flex items-center justify-center border border-[#DCE4F5]">
                    {icons[index]}
                  </div>
                  <span className="font-['Sora',sans-serif] text-xs font-bold px-2.5 py-1 rounded-md bg-[#12173A]/5 text-[#12173A]/60">
                    {item.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-['Sora',sans-serif] text-lg sm:text-xl font-bold text-[#12173A] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="font-['Work_Sans',sans-serif] text-sm sm:text-base text-[#12173A]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom subtle accent line */}
              <div className="mt-8 pt-4 border-t border-[#F4F6FB] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1E2A6E]" />
                <span className="text-xs font-semibold text-[#1E2A6E]">Odontops Kennedy Norte</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
