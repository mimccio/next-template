import type { Config } from 'tailwindcss'

export const appPreset = {
  content: [],
  prefix: '',
  theme: {
    extend: {
      screens: { xs: '320px' },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config
