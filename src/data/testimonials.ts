import { TestimonialSlot } from '../types';

export const TESTIMONIAL_PLACEHOLDER_TEXT =
  'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, tratamiento recibido y comentario.';

export const TESTIMONIAL_SLOTS: TestimonialSlot[] = [
  {
    id: 'testimonio-slot-1',
    placeholderText: TESTIMONIAL_PLACEHOLDER_TEXT,
    rating: 5,
  },
  {
    id: 'testimonio-slot-2',
    placeholderText: TESTIMONIAL_PLACEHOLDER_TEXT,
    rating: 5,
  },
  {
    id: 'testimonio-slot-3',
    placeholderText: TESTIMONIAL_PLACEHOLDER_TEXT,
    rating: 5,
  },
  {
    id: 'testimonio-slot-4',
    placeholderText: TESTIMONIAL_PLACEHOLDER_TEXT,
    rating: 5,
  },
];
