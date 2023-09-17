import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/ui/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "picture-shape": "url('/img/shape.pngg')",
      },
    },
  },
  plugins: [],
};
export default config;
