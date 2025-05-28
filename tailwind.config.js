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
        'primary': 'var(--bg-primary)',
        'white': 'var(--bg-white)',
        'lighter-grey': 'var(--bg-lighter-grey)',
        'light-grey': 'var(--bg-light-grey)',
        'input': 'var(--bg-input)',
        'brand-jade': 'var(--brand-jade)',
        'brand-pink': 'var(--brand-pink)',
        'brand-jade-light': 'var(--brand-jade-light)',
        'text-primary': 'var(--text-primary)',
        'text-dark': 'var(--text-dark)',
        'text-secondary': 'var(--text-secondary)',
        'text-light': 'var(--text-light)',
        'border-light': 'var(--border-light)',
        'border-grey': 'var(--border-grey)',
        'status-red': 'var(--status-red)',
        'btn-vet': 'var(--btn-vet)',
        'btn-owner': 'var(--btn-owner)'
      }
    },
  },
  plugins: [],
} 