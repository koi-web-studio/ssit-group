/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blanco: "#111827",
                gris: "#617086",
                secondary: "#262626",
            },
        },
    },
    plugins: [],
};
