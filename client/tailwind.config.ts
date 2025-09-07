/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}", "./*.html"],
    theme: {
        extend: {
            screen:{
                'xs600' : '600px',
                'xs400' : '400px',
            },
            colors: {
                dark: "#0A0A0A",
                darkHover: "#31363F",
                light: "#f5f5f5",
                primary: "#76ABAE",
                danger: "#ef4444",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
}
