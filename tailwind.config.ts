module.exports = {
    darkMode: 'class', // Enables class-based dark mode
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: { // Use 'colors' instead of 'color'
          customColor: "#ff6347", // Add your custom color here
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"), // Animation plugin
      require("@tailwindcss/typography"), // Typography plugin
    ],
  };