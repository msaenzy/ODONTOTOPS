import React from 'react';

interface ButtonProps {
  id?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  id,
  variant = 'primary',
  size = 'md',
  children,
  href,
  target,
  rel,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium font-["Sora",sans-serif] rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#7A2E8C] focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap cursor-pointer select-none';

  // Size padding following 2x horizontal rule: e.g. py-2 px-4, py-3 px-6, py-4 px-8
  const sizeStyles = {
    sm: 'text-xs py-2 px-4 min-h-[40px] gap-1.5',
    md: 'text-sm sm:text-base py-3 px-6 min-h-[44px] gap-2 font-semibold',
    lg: 'text-base sm:text-lg py-4 px-8 min-h-[50px] gap-2.5 font-bold shadow-sm',
  };

  // Variants based on exact brand colors
  // Primary = #1E2A6E (azul institucional Odontops)
  // Accent/Secondary = #7A2E8C (púrpura/magenta de marca)
  const variantStyles = {
    primary:
      'bg-[#1E2A6E] text-white hover:bg-[#162052] border border-[#1E2A6E] shadow-sm hover:shadow-md',
    accent:
      'bg-[#7A2E8C] text-white hover:bg-[#632373] border border-[#7A2E8C] shadow-sm hover:shadow-md',
    secondary:
      'bg-[#F4F6FB] text-[#1E2A6E] hover:bg-[#E8EDF8] border border-[#DCE4F5]',
    outline:
      'bg-transparent text-[#1E2A6E] border-2 border-[#1E2A6E] hover:bg-[#1E2A6E]/5',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
        className={combinedClasses}
      >
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
