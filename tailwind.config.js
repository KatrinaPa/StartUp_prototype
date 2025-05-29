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
        'brand-yellow': 'var(--brand-yellow)',
        'brand-green': 'var(--brand-green)',
        'brand-mint': 'var(--brand-mint)',
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