/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        teal: {
          400: '#64FFDA',
          500: '#64FFDA',
          600: '#4FD1C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      backgroundImage: {
        'grid-slate-100': 'linear-gradient(90deg, rgb(241 245 249 / 0.1) 1px, transparent 1px), linear-gradient(rgb(241 245 249 / 0.1) 1px, transparent 1px)',
        'grid-slate-700': 'linear-gradient(90deg, rgb(51 65 85 / 0.1) 1px, transparent 1px), linear-gradient(rgb(51 65 85 / 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};