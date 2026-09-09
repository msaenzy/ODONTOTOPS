import React from 'react';

interface SectionHeadingProps {
  id?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  tag,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses =
    align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div id={id} className={`max-w-3xl mb-12 sm:mb-16 ${alignmentClasses} ${className}`}>
      {tag && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-[#7A2E8C]/10 text-[#7A2E8C] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7A2E8C]"></span>
          {tag}
        </div>
      )}
      <h2 className="font-['Sora',sans-serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#12173A] tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-['Work_Sans',sans-serif] text-base sm:text-lg text-[#12173A]/80 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
