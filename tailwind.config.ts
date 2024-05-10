import type { Config } from 'tailwindcss'
import { appPreset } from './config/app-preset'
import { shadcnPreset } from './config/shadcn-preset'

const config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}', './src/ui/**/*.{ts,tsx}'],
  presets: [appPreset, shadcnPreset],
} satisfies Config

export default config
