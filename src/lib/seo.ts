export const SITE = {
  name: 'Prabhu Motor Training School (Regd.)',
  url: 'https://prabhumotortrainingschool.in',
  locale: 'en_IN',
  twitterCard: 'summary_large_image' as const,
  ogImage: 'https://prabhumotortrainingschool.in/og-cover.svg',
};

export function canonicalFor(path: string): string {
  if (path === '/') return SITE.url + '/';
  return SITE.url + path;
}

export function localBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: 'Prabhu Motor Training School (Regd.)',
    alternateName: 'Prabhu Motor Training School',
    description: 'Government Recognized motor training school in Ayodhya offering HMV, LMV and E-Rickshaw driving training.',
    telephone: '+918005022800',
    url: SITE.url,
    hasMap: 'https://maps.app.goo.gl/ct9rjvArzcCCSAc28',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Udaya Chauraha, Jalpa Colony, Amanigunj',
      addressLocality: 'Ayodhya',
      addressRegion: 'Uttar Pradesh',
      postalCode: '224001',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Ayodhya' },
      { '@type': 'City', name: 'Faizabad' },
    ],
    taxID: '09AVRPJ3630K2Z4',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Licence No.', value: 'UPZ072026DSL00008' },
      { '@type': 'PropertyValue', name: 'Licence Valid Till', value: '20/08/2031' },
      { '@type': 'PropertyValue', name: 'Recognition', value: 'Government Recognized' },
    ],
    sameAs: ['https://maps.app.goo.gl/ct9rjvArzcCCSAc28'],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalFor(item.path),
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
