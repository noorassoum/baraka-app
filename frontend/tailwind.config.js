/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      colors: {
        //how to use it
        //bg-teal-500
        // text-teal-600
        // border-teal-300
        // hover:bg-teal-600

        /* -------------------------------
           PRIMARY — TEAL
        --------------------------------*/
        teal: {
          100: "#D4F4F0",
          200: "#AEEAE1",
          300: "#7FD8CC",
          400: "#54C8BA",
          500: "#2CB7AA", // Primary Teal
          600: "#249A8E",
          700: "#1C7F74",
          800: "#15645B",
          900: "#0C463F",
        },

        /* -------------------------------
           ACCENT — ORANGE
        --------------------------------*/
        orange: {
          100: "#FFE4D7",
          200: "#FFC4AA",
          300: "#FFA47C",
          400: "#FF8A59",
          500: "#FF6B35", // Primary Orange
          600: "#E85F30",
          700: "#C65126",
          800: "#9E411F",
          900: "#753016",
        },

        /* -------------------------------
           SUCCESS — teal-based greens
        --------------------------------*/
        success: {
          100: "#D6F4E4",
          200: "#B2E8CE",
          300: "#88DCB6",
          400: "#5FCE9B",
          500: "#36C083",
          600: "#2D9F6E",
          700: "#247F58",
          800: "#1B5F42",
          900: "#123F2C",
        },

        /* -------------------------------
           WARNING — orange-compatible gold
        --------------------------------*/
        warning: {
          100: "#FFF1D7",
          200: "#FFDCA0",
          300: "#FFC56B",
          400: "#FFB03F",
          500: "#FFA321",
          600: "#E68E1D",
          700: "#BF7018",
          800: "#995616",
          900: "#703E10",
        },

        /* -------------------------------
           ERROR — warm red family
        --------------------------------*/
        error: {
          100: "#FFE1E1",
          200: "#FFBABA",
          300: "#FF8B8B",
          400: "#F56565",
          500: "#E53935",
          600: "#C62828",
          700: "#9B1C1C",
          800: "#7A1414",
          900: "#5A0F0F",
        },

        /* -------------------------------
           NEUTRALS — cards, borders, bg
        --------------------------------*/
        neutral: {
          100: "#F7F8F7",
          200: "#EDEEEE",
          300: "#DCDDDD",
          400: "#C7C8C8",
          500: "#A8A9A9",
          600: "#818282",
          700: "#5A5B5B",
          800: "#363737",
          900: "#161717",
        },
      },

      fontFamily: {
        alexandria: ["Alexandria", "sans-serif"],
      },
      fontSize: {
        displayLarge: ["32px", { lineHeight: "40px", letterSpacing: "0.2px" }],
        displayMedium: ["28px", { lineHeight: "36px", letterSpacing: "0.15px" }],
        displaySmall: ["24px", { lineHeight: "32px", letterSpacing: "0.1px" }],

        headlineLarge: ["24px", { lineHeight: "32px" }],
        headlineMedium: ["20px", { lineHeight: "28px" }],
        headlineSmall: ["18px", { lineHeight: "26px" }],

        titleLarge: ["20px", { lineHeight: "28px" }],
        titleMedium: ["16px", { lineHeight: "24px" }],
        titleSmall: ["14px", { lineHeight: "20px" }],

        bodyLarge: ["16px", { lineHeight: "24px" }],
        bodyMedium: ["14px", { lineHeight: "20px" }],
        bodySmall: ["12px", { lineHeight: "16px" }],

        labelLarge: ["14px", { lineHeight: "20px" }],
        labelMedium: ["12px", { lineHeight: "16px" }],
        labelSmall: ["10px", { lineHeight: "14px" }],
      },

      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      //      <h1 className="font-alexandria text-displayLarge font-bold">
      //   Welcome to Taqseem
      // </h1>

      // <p className="text-bodyMedium font-normal">
      //   Today’s available boxes
      // </p>

      // <button className="text-button font-medium">
      //   Reserve Now
      // </button>

      boxShadow: {
        none: "none",

        xs: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        sm: "0px 2px 3px rgba(0, 0, 0, 0.08)",

        tabBar: "0px -2px 6px rgba(0, 0, 0, 0.12)",

        md: "0px 4px 6px rgba(0, 0, 0, 0.10)",
        lg: "0px 8px 12px rgba(0, 0, 0, 0.12)",
      },
      // usage <div className="shadow-xs">...</div>


    },

  },
  plugins: [],
}
