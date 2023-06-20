/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "gmv-din-pro-black-italic": ["GMV_DIN_PRO-Black_Italic", "sans-serif"],
        "gmv-din-pro-black": ["GMV_DIN_PRO-Black", "sans-serif"],
        "gmv-din-pro-bold-italic": ["GMV_DIN_PRO-Bold_Italic", "sans-serif"],
        "gmv-din-pro-exllight-italic": [
          "GMV_DIN_PRO-Exllight_Italic",
          "sans-serif",
        ],
        "gmv-din-pro-exlight": ["GMV_DIN_PRO-Exlight", "sans-serif"],
        "gmv-din-pro-italic": ["GMV_DIN_PRO-Italic", "sans-serif"],
        "gmv-din-pro-light-italic": ["GMV_DIN_PRO-Light_Italic", "sans-serif"],
        "gmv-din-pro-light": ["GMV_DIN_PRO-Light", "sans-serif"],
        "gmv-din-pro-medium-italic": [
          "GMV_DIN_PRO-Medium_Italic",
          "sans-serif",
        ],
        "gmv-din-pro-medium": ["GMV_DIN_PRO-Medium", "sans-serif"],
        "gmv-din-pro-thin-italic": ["GMV_DIN_PRO-Thin_Italic", "sans-serif"],
        "gmv-din-pro-thin": ["GMV_DIN_PRO-Thin", "sans-serif"],
        "gmv-din-pro": ["GMV_DIN_Pro", "sans-serif"],
        "gs3-druk-heavy-italic": [
          "GS3_Druk_Heavy_Italic",
          "GMV_DIN_PRO-Black_Italic",
        ],
        "gs3-druk-heavy": ["GS3_Druk_Heavy", "sans-serif"],
        tungsten: ["Tungsten", "GS3_Druk_Heavy"],
        myriad: ["MyriadPro-Regular", "san-serif"],
      },

      colors: {
        "custom-gray": "#282828",
      },
      minWidth: {
        150: "150px",
      },
      width: {
        dWScreen: "100dvw",
      },
      height: {
        dHScreen: "100vh",
      },
      screens: {
        navBreak: "1142px",
        // list all pixel as a breakpoint from width = 1592 to 0

        s1582: "1582px",
        s1474: "1474px",
        s1400: "1400px",
        s1356: "1356px",
        s1160: "1160px",
        s1700: "1700px",
        screen1ColumnBreak: "1100px",
        screen2ColumnBreak: "1100px",
        s940: "940px",
        s647: "647px",
        s475: "475px",
        s420: "420px",
        s466: "466px",
        SE: "376px",
        s385: "385px",
        h809: "809px",
        s1473: "1473px",
        s1406: "1406px",
        s1288: "1288px",
        s1148: "1148px",
        s1043: "1043px",
        navBreak: "926px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
