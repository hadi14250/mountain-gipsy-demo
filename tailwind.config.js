/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mg-dark': '#0A0F14',
        'mg-darker': '#050810',
        'mg-dark-950': '#030508',
        'mg-dark-900': '#0A0F14',
        // Mountain-inspired palette - slate blues and peaks
        'mg-mountain': {
          900: '#1a2a3a',
          800: '#243748',
          700: '#2f4556',
          600: '#3a5264',
          500: '#456072',
        },
        // Ice and snow tones
        'mg-ice': {
          500: '#a8c5d9',
          400: '#c4dae9',
          300: '#dfeef7',
          200: '#f0f7fb',
          100: '#f8fbfd',
        },
        // Sunset/alpine glow - golden hour
        'mg-gold': {
          600: '#d4941f',
          500: '#FFB42B',
          400: '#FFCE66',
          300: '#FFDA95',
          200: '#FFE6B8',
        },
        // Keep purple as accent only
        'mg-purple': {
          900: '#500891',
          700: '#6B1BAD',
          500: '#865BAC',
          300: '#AA89C8',
          100: '#CAA8E4',
        },
        // Stone/rock tones
        'mg-stone': {
          700: '#3d3d3d',
          600: '#525252',
          500: '#6b6b6b',
          400: '#8a8a8a',
          300: '#a8a8a8',
        },
        'mg-gray': {
          900: '#1a1f26',
          800: '#2a3038',
          700: '#3a424d',
          600: '#5a6370',
          500: '#8a929f',
          400: '#c5cad3',
        }
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'rotate-slow': 'rotateSlow 30s linear infinite',
        'rotate-slow-reverse': 'rotateSlowReverse 40s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 8s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'scroll-dot': 'scrollDot 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(168, 197, 217, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(168, 197, 217, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateSlowReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' },
        },
        scrollDot: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mountain-pattern': 'url("/patterns/mountain-pattern.svg")',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
