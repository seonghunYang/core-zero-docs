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
      colors: {
        primary:
          "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)64%)",
      },
      keyframes: {
        opacity: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        opacityReverse: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        "opacity-show": "opacity 0.2s ease-in",
        "opacity-show-reverse": "opacityReverse 0.2s ease-in",
      },
    },
  },
  plugins: [],
};
