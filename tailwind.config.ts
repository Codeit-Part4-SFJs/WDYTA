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
      mobile: { max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px" },
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
        "black-1C": "#1C1C22",
        "black-25": "#252530",

        "gray-6E": "#6E6E82",
        "gray-9F": "#9FA6B2",
        "gray-F1": "#F1F1F5",
        "gray-35": "#353542",
        "gray-25": "#252530",

        "lime-C5": "#C5D17C",

        "orange-F7": "#F75532",
        "orange-FF": "#FF7E46",

        "purple-A9": "#A953FF",
        "purple-75": "#757AFF",

        "green-49": "#49AF1A",
        "green-23": "#23B581",

        "pink-D6": "#D676C1",
        "pink-FD": "#FD529A",

        "blue-30": "#3098E3",
        "main-blue": "#5097FA",
        "main-indigo": "#5363FF",

        yellow: "#FFC83C",
        green: "#05D58B",
        pink: "#FF2F9F",
        red: "#FF0000",
      },
      dropShadow: {
        "linear-gradient":
          "10px 10px 10px linear-gradient(91deg, #5097FA 100%, #5363FF 100%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
