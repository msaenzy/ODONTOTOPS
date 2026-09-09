export interface Treatment {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  specialtyTitle: string;
  education: string;
  diplomaOrMaster: string;
  experience: string;
  quote: string;
  image: string;
  imageAlt: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface CoreValue {
  id: string;
  title: string;
  icon: string;
}

export interface TestimonialSlot {
  id: string;
  placeholderText: string;
  rating: number; // 5 (outline stars)
}

export interface BookingFormData {
  name: string;
  treatment: string;
  preferredSchedule: string;
}
