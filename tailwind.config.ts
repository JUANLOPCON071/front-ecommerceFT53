import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "login-image" : "https://www.designbolts.com/wp-content/uploads/2016/07/iPhone-6-iOS-10-Wallpapers.jpg"
      },
      fontSize: {
        'tiny': '9px'
      },
    },
  },
  plugins: [],
};
export default config;
