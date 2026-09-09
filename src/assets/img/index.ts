/**
 * Central repository for all images and visual assets across Odontops.
 * No component imports loose images from outside this directory.
 */

export const IMAGES = {
  heroClinic: {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=85',
    alt: 'Consultorio dental moderno y luminoso de Odontops en Kennedy Norte, Guayaquil',
  },
  heroClinicDetail: {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85',
    alt: 'Instalaciones y equipamiento de alta tecnología dental en Kennedy Norte',
  },
  valeriaNaranjo: {
    src: 'https://images.unsplash.com/photo-1594824813570-58047915a209?auto=format&fit=crop&w=800&q=85',
    alt: 'Od. Valeria Naranjo – Especialista en Rehabilitación Oral y Prótesis Implantoasistida',
  },
  christianYanez: {
    src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85',
    alt: 'Od. Christian Yánez – Especialista en Ortodoncia y Ortopedia Dentofacial',
  },
  ogImage: {
    src: '/og-image.svg',
    alt: 'Odontops Dental & Medical Center – Kennedy Norte, Guayaquil',
  },
  favicon: {
    src: '/favicon.svg',
    alt: 'Odontops Icono Oficial',
  }
} as const;
