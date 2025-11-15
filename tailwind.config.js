/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        'italian-green': '#009246',
        'intense-red': '#CE2B37',
        'premium-white': '#FFFFFF',
        'elegant-gold': '#D4AF37',
        'deep-black': '#1a1a1a',
        'whatsapp-green': '#25D366',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee-y': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        }
      },
      animation: {
        pulse: 'pulse 3s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'marquee-y': 'marquee-y 30s linear infinite',
      }
    },
  },
  plugins: [],
}
