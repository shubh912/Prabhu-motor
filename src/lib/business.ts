export const BUSINESS = {
  name: 'Prabhu Motor Training School',
  registeredName: 'Prabhu Motor Training School (Regd.)',
  tagline: 'Government Recognized',
  taglineHindi: 'सरकार द्वारा मान्यता प्राप्त',
  phone: '8005022800',
  telLink: 'tel:8005022800',
  phoneIntl: '+918005022800',
  addressLines: [
    'Udaya Chauraha, Jalpa Colony,',
    'Amanigunj, Ayodhya,',
    'Faizabad (U.P.) 224001',
  ],
  fullAddress: 'Udaya Chauraha, Jalpa Colony, Amanigunj, Ayodhya, Faizabad (U.P.) 224001',
  landmark: 'Udaya Chauraha, Amanigunj',
  city: 'Ayodhya',
  mapsUrl: 'https://maps.app.goo.gl/ct9rjvArzcCCSAc28',
  mapsEmbed: 'https://www.google.com/maps?q=Udaya%20Chauraha%2C%20Jalpa%20Colony%2C%20Amanigunj%2C%20Ayodhya%2C%20Uttar%20Pradesh%20224001&output=embed',
  gstin: '09AVRPJ3630K2Z4',
  licenseNo: 'UPZ072026DSL00008',
  licenseValid: '20/08/2031',
} as const;

export const COURSES = [
  { value: 'HMV Training', label: 'HMV Training', path: '/services/hmv-training' },
  { value: 'LMV Training', label: 'LMV Training', path: '/services/lmv-training' },
  { value: 'E-Rickshaw Training', label: 'E-Rickshaw Training', path: '/services/e-rickshaw-training' },
  { value: 'General Enquiry', label: 'General Enquiry', path: '/contact' },
] as const;

export type CourseValue = (typeof COURSES)[number]['value'];
