import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "480px" },
      tablet: { min: "481px", max: "767px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-gradation": "linear-gradient(91deg, #5097FA 0%, #5363FF 100%)",
      },
      colors: {
        "black-17": "#17171C",
        "black-21": "#21212A",
        "black-2E": "#2E2E3A",

        "gray-6E": "#6E6E82",
        "gray-9F": "#9FA6B2",
        "gray-F1": "#F1F1F5",
        "gray-35": "#353542",

        "main-blue": "#5097FA",
        "main-indigo": "#5363FF",

        yellow: "#FFC83C",
        green: "#05D58B",
        pink: "#FF2F9F",
        red: "#FF0000",
      },
    },
  },
  plugins: [],
};
export default config;
