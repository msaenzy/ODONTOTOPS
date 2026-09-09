import { Treatment } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'limpiezas-dentales',
    title: 'Limpiezas dentales',
    description: 'Profilaxis profesional para mantener tu salud bucal al día.',
    icon: 'Sparkles',
  },
  {
    id: 'restauraciones',
    title: 'Restauraciones',
    description: 'Recupera la forma y función de piezas dañadas con materiales de calidad.',
    icon: 'ShieldCheck',
  },
  {
    id: 'estetica-dental',
    title: 'Estética dental',
    description: 'Diseño de sonrisa personalizado, equilibrando forma, color y proporción.',
    icon: 'Smile',
    highlight: true,
  },
  {
    id: 'blanqueamientos',
    title: 'Blanqueamientos',
    description: 'Aclaramiento dental profesional, seguro y con resultados visibles.',
    icon: 'SunMedium',
  },
  {
    id: 'endodoncias',
    title: 'Endodoncias',
    description: 'Tratamiento de conducto para salvar piezas comprometidas sin dolor.',
    icon: 'Activity',
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia (brackets convencionales e invisibles)',
    description: 'Corrección de mordida y alineación con la técnica que se ajuste a tu estilo de vida.',
    icon: 'CheckCircle2',
    highlight: true,
  },
  {
    id: 'ortopedia-dental',
    title: 'Ortopedia dental',
    description: 'Intervención temprana para guiar el crecimiento óseo y dental.',
    icon: 'Compass',
  },
  {
    id: 'implantes-dentales',
    title: 'Implantes dentales',
    description: 'Reemplazo fijo y natural para piezas perdidas.',
    icon: 'Shield',
    highlight: true,
  },
  {
    id: 'cirugias',
    title: 'Cirugías',
    description: 'Procedimientos quirúrgicos orales con planificación y seguimiento cercano.',
    icon: 'Stethoscope',
  },
  {
    id: 'protesis-fijas',
    title: 'Prótesis fijas',
    description: 'Restitución permanente de piezas dentales con acabado natural.',
    icon: 'Layers',
  },
  {
    id: 'protesis-removibles',
    title: 'Prótesis removibles',
    description: 'Soluciones cómodas y funcionales para restaurar tu sonrisa.',
    icon: 'RefreshCw',
  },
];
