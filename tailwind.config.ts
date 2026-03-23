import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0a',
        night: '#111111',
        graphite: '#171717',
        gold: {
          50: '#f9f2dc',
          100: '#f1e4bf',
          200: '#e8d498',
          300: '#ddc06a',
          400: '#d4af37',
          500: '#b8942f',
          600: '#8f7026',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Baskerville', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        halo: '0 0 0 1px rgba(212, 175, 55, 0.12), 0 22px 80px rgba(0, 0, 0, 0.55)',
        glow: '0 0 40px rgba(212, 175, 55, 0.16)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(212,175,55,0.17), transparent 36%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06), transparent 22%)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
    },
  },
  plugins: [],
} satisfies Config;
