/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#F5F2E8', // Primary - Warm beige background
        'caramel': '#A47148',
        'anthracite': '#2F2F2F',
        'champagne': '#EADCA6',
        'slate-blue': '#4A6D7C',
        'warm-ivory': '#FAF9F6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#F5F2E8',      // Primary - Warm beige for buttons/interactive
          'secondary': '#A47148',    // Secondary - Caramel brown
          'accent': '#4A6D7C',       // Modern Accent - Slate blue
          'neutral': '#2F2F2F',      // Main Text - Anthracite gray
          'base-100': '#FAF9F6',     // Off-white - Warm ivory background
          'base-200': '#F5F2E8',     // Warm beige for sections
          'base-300': '#EADCA6',     // Champagne gold for subtle elements
        },
        dark: {
          'primary': '#F5F2E8',      // Primary - Warm beige for buttons/interactive
          'secondary': '#A47148',    // Secondary - Caramel brown
          'accent': '#4A6D7C',       // Modern Accent - Slate blue
          'neutral': '#FAF9F6',      // Off-white for dark mode text
          'base-100': '#1F1F1F',     // Dark background
          'base-200': '#2F2F2F',     // Main Text - Anthracite gray as background
          'base-300': '#3F3F3F',     // Darker variant
        },
      },
    ],
  },
};