import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1E3A8A',
          secondary: '#3B82F6',
          accent: '#F59E0B',
          ink: '#111827',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(30, 58, 138, 0.08)',
      },
      borderRadius: {
        soft: '1.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config
