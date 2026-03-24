export type Language = 'en' | 'kn'

export type Copy = {
  brandName: string
  tagline: string
  nav: { home: string; features: string; howItWorks: string; parents: string; csr: string; auth: string }
  cta: { startLearning: string; exploreFeatures: string }
  footer: { rights: string; language: string }
}

export const copy: Record<Language, Copy> = {
  en: {
    brandName: 'ODEE - ಓದಿ',
    tagline: 'One Destination for Education & Excellence',
    nav: {
      home: 'Home',
      features: 'Features',
      howItWorks: 'How It Works',
      parents: 'For Parents',
      csr: 'CSR / Partners',
      auth: 'Login / Signup',
    },
    cta: {
      startLearning: 'Start Learning',
      exploreFeatures: 'Explore Features',
    },
    footer: {
      rights: 'All rights reserved.',
      language: 'Language',
    },
  },
  kn: {
    brandName: 'ODEE - ಓದಿ',
    tagline: 'ಶಿಕ್ಷಣ ಮತ್ತು ಶ್ರೇಷ್ಠತೆಗೆ ಒಂದೇ ಗುರಿ',
    nav: {
      home: 'ಮುಖಪುಟ',
      features: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
      howItWorks: 'ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      parents: 'ಪೋಷಕರಿಗಾಗಿ',
      csr: 'CSR / ಪಾಲುದಾರರು',
      auth: 'ಲಾಗಿನ್ / ನೋಂದಣಿ',
    },
    cta: {
      startLearning: 'ಕಲಿಕೆ ಆರಂಭಿಸಿ',
      exploreFeatures: 'ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನೋಡಿ',
    },
    footer: {
      rights: 'ಎಲ್ಲ ಹಕ್ಕುಗಳು ಮೀಸಲು.',
      language: 'ಭಾಷೆ',
    },
  },
}
