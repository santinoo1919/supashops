/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
          light: "#60a5fa",
        },
        secondary: "#64748b",
        surface: {
          DEFAULT: "#ffffff",
          secondary: "#f8fafc",
        },
        content: {
          DEFAULT: "#1f2937",
          secondary: "#64748b",
        },
      },
      spacing: {
        card: "16px",
      },
      fontFamily: {
        sans: ["Inter"],
        heading: ["Satoshi"],
        brand: ["Satoshi"],
      },
    },
  },
  plugins: [],
};
