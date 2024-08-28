/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        opacity: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "opacity-show": "opacity 0.2s ease-in",
        "opacity-show-reverse": "opacity 0.2s reverse ease-in",
      },
    },
  },
  plugins: [],
};
