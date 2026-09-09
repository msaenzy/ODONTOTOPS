import React from 'react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  inverted?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  inverted = false,
  onClick,
}) => {
  return (
    <div
      id="brand-logo-lockup"
      onClick={onClick}
      className={`inline-flex flex-col select-none group cursor-pointer ${className}`}
      aria-label="Odontops Dental & Medical Center"
    >
      {/* Primary Wordmark Lockup: OD [Tooth] TOPS */}
      <div className="flex items-center gap-0.5 leading-none">
        <span
          className="font-['Sora',sans-serif] font-extrabold text-2xl sm:text-3xl tracking-tight transition-colors duration-200"
          style={{ color: inverted ? '#FFFFFF' : '#7A2E8C' }}
        >
          OD
        </span>

        {/* Linear tooth inside primary circle replacing center "O" dot */}
        <span
          className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full mx-0.5 shadow-xs transition-transform duration-200 group-hover:scale-105"
          style={{ backgroundColor: inverted ? '#7A2E8C' : '#1E2A6E' }}
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Elegant stylized anatomical tooth path */}
            <path d="M7 4C4.5 4 3 6.5 3 9.5C3 13.5 5 16 6.5 20C7.5 22.5 8.5 22.5 9.5 20C10.5 17.5 11 15 12 15C13 15 13.5 17.5 14.5 20C15.5 22.5 16.5 22.5 17.5 20C19 16 21 13.5 21 9.5C21 6.5 19.5 4 17 4C14.5 4 13 5.5 12 5.5C11 5.5 9.5 4 7 4Z" />
          </svg>
        </span>

        <span
          className="font-['Sora',sans-serif] font-extrabold text-2xl sm:text-3xl tracking-tight transition-colors duration-200"
          style={{ color: inverted ? '#F4F6FB' : '#1E2A6E' }}
        >
          TOPS
        </span>
      </div>

      {/* Subtitle baseline */}
      <span
        className="font-['Sora',sans-serif] font-bold text-[8px] sm:text-[9.5px] tracking-[0.24em] uppercase pt-0.5 leading-tight"
        style={{ color: inverted ? '#E0E7FF' : '#12173A' }}
      >
        DENTAL &amp; MEDICAL CENTER
      </span>
    </div>
  );
};
