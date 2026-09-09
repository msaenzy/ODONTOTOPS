import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Tratamientos', href: '#tratamientos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#12173A]/5'
          : 'bg-white/90 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo at the left (scroll to #inicio) */}
          <a
            href="#inicio"
            id="nav-logo-link"
            aria-label="Odontops – Ir al Inicio"
            className="flex-shrink-0"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center space-x-1 lg:space-x-6"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#12173A] hover:text-[#7A2E8C] transition-colors rounded-lg font-['Work_Sans',sans-serif]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action buttons & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp CTA Button: ALWAYS VISIBLE, including mobile outside the hamburger menu */}
            <Button
              id="navbar-whatsapp-cta"
              variant="accent"
              size="sm"
              href={CLINIC_INFO.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm py-2 px-3 sm:px-4.5 font-bold shadow-xs"
              icon={<MessageCircle className="w-4 h-4 text-white" strokeWidth={2.5} />}
            >
              <span className="hidden xs:inline">Agendar por </span>WhatsApp
            </Button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              className="md:hidden p-2 rounded-xl text-[#12173A] hover:bg-[#F4F6FB] transition-colors focus-visible:outline-2 focus-visible:outline-[#7A2E8C]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={2.2} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2.2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-white border-b border-[#DCE4F5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 text-base font-semibold text-[#12173A] hover:text-[#7A2E8C] hover:bg-[#F4F6FB] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#F4F6FB] px-4 text-xs text-[#12173A]/60 flex items-center justify-between">
            <span>{CLINIC_INFO.sector}</span>
            <span>{CLINIC_INFO.hours}</span>
          </div>
        </div>
      )}
    </header>
  );
};
