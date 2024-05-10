import plugin from 'tailwindcss/plugin'

import { colors } from './colors'

export const shadcnPlugin = plugin(function () {}, {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors,
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 3px)`,
        sm: 'calc(var(--radius) - 6px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 1.5s linear infinite',
      },
    },
  },
})
