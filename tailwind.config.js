/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // kuwiya custom colors
      colors: {
        primary: '#FFFFFF',
        secondary: '#00678F',
        darkyellow: '#F8A434',
        lightGray: '#D9D9D980',
        darkGray: '#53585B',
      },
      // kuwiya custom fonts
      fontFamily: {
        'work-sans': ['"Work Sans", sans-serif'],
      },

      keyframes: {
        fade_in: {
          from: { opacity: '0' },
          to: { opacity: '100' },
        },
      },
      animation: {
        fade_in: 'fade_in 0.8s ease-out',
      },

      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'translate(360deg)' },
        },
      },

      // slide up animation
      keyframes: {
        slide_up: {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          '50%': {
            opacity: '50',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '100',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slide_up: 'slide_up .7s ease-out',
      },
    },
  },
  plugins: [],
};
