/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E2A3B',        // deep harbor blue – text & dark surfaces
        tide: { 50: '#EAF6F4', 100: '#CFEBE6', 500: '#1E9E8C', 600: '#16806F', 700: '#126656' },
        coral: { 500: '#FF6B57', 600: '#EC5440' },
        mist: '#F2F6F7',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        rise: { '0%': { opacity: 0, transform: 'translateY(18px)' }, '100%': { opacity: 1, transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: { rise: 'rise .7s cubic-bezier(.2,.7,.2,1) both', float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}
