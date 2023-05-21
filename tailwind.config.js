/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000000',
        primary: {
          100: '#FFE5F4',
          200: '#FFB7E2',
          300: '#FF8ACF',
          400: '#FF5CBD',
          500: '#FF2EAA',
          600: '#EB008C',
          700: '#C20074',
          800: '#99005B',
          900: '#710043',
          1000: '#48002B',
        },
        secondary: {
          100: '#E5E5FF',
          200: '#B7B7FF',
          300: '#5C5CFF',
          400: '#5C5CFF',
          500: '#2E2EFF',
          600: '#0000EB',
          700: '#0000C2',
          800: '#000099',
          900: '#000071',
          1000: '#000048',
        },
        info: {
          100: '#E5FFFD',
          200: '#B7FFF9',
          300: '#8AFFF6',
          400: '#5CFFF2',
          500: '#2EFFEF',
          600: '#00EBD9',
          700: '#00C2B3',
          800: '#00998E',
          900: '#007168',
          1000: '#004842',
        },
      },
    },
  },
  variants: {
    extend: {
      fontFamily: {
        sans: ['var(--font-HelveticaNeueLT)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
