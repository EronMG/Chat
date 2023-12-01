/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
    extend: {
        colors: {
            primary: "#00040f",
            secondary: "#00f6ff",
            dimWhite: "rgba(255, 255, 255, 0.7)",
            dimBlue: "rgba(9, 151, 124, 0.1)",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
    },
    screens: {
        xs: "480px",
        sm: "768px",
        ss: "900px",
        ms: "1050px",
        lg: "1200px",
    },
};
export const plugins = [];