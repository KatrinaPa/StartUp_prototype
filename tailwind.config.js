/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-white': 'var(--bg-white)',
        'bg-lighter-grey': 'var(--bg-lighter-grey)',
        'bg-light-grey': 'var(--bg-light-grey)',
        'bg-input': 'var(--bg-input)',
        'brand-jade': 'var(--brand-jade)',
        'brand-pink': 'var(--brand-pink)',
        'brand-jade-light': 'var(--brand-jade-light)',
        'text-primary': 'var(--text-primary)',
        'text-dark': 'var(--text-dark)',
        'text-secondary': 'var(--text-secondary)',
        'text-light': 'var(--text-light)',
        'border-light': 'var(--border-light)',
        'status-red': 'var(--status-red)',
        'btn-vet': 'var(--btn-vet)',
        'btn-owner': 'var(--btn-owner)'
      }
    },
  },
  plugins: [],
} 