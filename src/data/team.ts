import { Doctor, CoreValue } from '../types';
import { IMAGES } from '../assets/img';

export const ABOUT_LEAD_TEXT =
  'Detrás de cada sonrisa que diseñamos hay un equipo de especialistas, no un consultorio genérico. Od. Valeria Naranjo y Od. Christian Yánez lideran Odontops combinando formación de posgrado, más de 7 años de experiencia cada uno, y un mismo compromiso: tratamientos que equilibran estética, función y bienestar.';

export const DOCTORS: Doctor[] = [
  {
    id: 'valeria-naranjo',
    name: 'Od. Valeria Naranjo',
    specialtyTitle: 'Especialista en Rehabilitación Oral y Prótesis Implantoasistida',
    education: 'Universidad de Cuenca',
    diplomaOrMaster: 'Diplomado en Armonización Orofacial y Estética Dental (UDLA)',
    experience:
      '+7 años en restauraciones estéticas, implantes dentales, diseño de sonrisa y rehabilitación oral.',
    quote:
      'Mi compromiso es brindar una atención personalizada y humana, creando tratamientos que equilibren estética, función y bienestar.',
    image: IMAGES.valeriaNaranjo.src,
    imageAlt: IMAGES.valeriaNaranjo.alt,
  },
  {
    id: 'christian-yanez',
    name: 'Od. Christian Yánez',
    specialtyTitle: 'Especialista en Ortodoncia',
    education: 'Universidad Católica de Cuenca',
    diplomaOrMaster:
      'Máster en Metodología de la Investigación en Ciencia de la Salud (Universidad Internacional de La Rioja)',
    experience:
      '+7 años en diagnóstico y planificación ortodóncica, corrección de mordida y ortodoncia preventiva e interceptiva.',
    quote:
      'Me permite no solo devolver la sonrisa a las personas, sino contribuir a mejorar su estado de salud y bienestar para tener una mejor calidad de vida.',
    image: IMAGES.christianYanez.src,
    imageAlt: IMAGES.christianYanez.alt,
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'diagnostico-integral',
    title: 'Diagnóstico integral',
    icon: 'ScanLine',
  },
  {
    id: 'atencion-personalizada',
    title: 'Atención personalizada',
    icon: 'HeartHandshake',
  },
  {
    id: 'actualizacion-constante',
    title: 'Actualización constante',
    icon: 'GraduationCap',
  },
  {
    id: 'resultados-en-el-tiempo',
    title: 'Resultados que se cuidan en el tiempo',
    icon: 'ShieldCheck',
  },
];
