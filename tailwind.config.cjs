/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Geometria', 'sans-serif'],
      mono: ['Geometria', 'monospace'],
    },
    boxShadow: {},
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '2560px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      purple: {
        200: '#372277',
        300: '#30095E',
        400: '#4A00E0',
        DEFAULT: '#8E2DE2',
        600: '#060213',
        700: '#14073B',
        transparent: 'rgba(20, 7, 59, 0.8)',
      },
      gray: {
        light: '#E0E3E5',
        DEFAULT: '#2A445A',
        darker: '#1C1819',
      },
    },
    letterSpacing: {
      widest: '0.4rem',
    },
  },
  plugins: [],
}
