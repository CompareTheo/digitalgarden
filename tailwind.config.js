module.exports = {
  content: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./layouts/**/*.html",
    "./assets/**/*.js",
    "./themes/digitalgarden/content/**/*.md",
    "./themes/digitalgarden/content/**/*.html",
    "./themes/digitalgarden/layouts/**/*.html",
    "./themes/digitalgarden/assets/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginBottom: '0.5rem', // Reduce bottom margin for h1
            },
            h2: {
              marginTop: '1rem', // Add a bit of space before h2
              marginBottom: '0.5rem', // Reduce bottom margin for h2
            },
            p: {
              marginTop: '0.5rem', // Reduce top margin for paragraphs
              marginBottom: '0.5rem', // Reduce bottom margin for paragraphs
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
