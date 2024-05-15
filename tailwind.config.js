/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blanco: "#111827",
                gris: "#9BA9BC",
                secondary: "#262626",
            },
        },
    },
    plugins: [],
};
