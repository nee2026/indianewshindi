/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#d60000",
        "background-light": "#f8f5f5",
        "background-dark": "#230f0f",
        "neutral-light": "#fdfafa",
        "neutral-dark": "#321a1a",
        "accent-gray": "#5a4a4a"
      },
      fontFamily: {
        "display": ["var(--font-work-sans)", "sans-serif"],
        "serif": ["var(--font-tiro-devanagari)", "serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        "soft": "0 2px 10px rgba(0, 0, 0, 0.03)",
        "medium": "0 8px 30px rgba(0, 0, 0, 0.04)",
        "hard": "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
        "glow": "0 0 20px rgba(214, 0, 0, 0.15)"
      }
    },
  },
  plugins: [],
}