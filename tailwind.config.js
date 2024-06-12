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
            keyframes: {
                "fade-in": {
                    from: {
                        opacity: 0,
                        transform: "translateY(-10px)",
                    },
                    to: {
                        opacity: 1,
                        transform: "none",
                    },
                },
                "loop-scroll": {
                    /* from: {
                        transform: "translateX(-2%)",
                    }, */
                    to: {
                        transform: "translate(-98%)",
                    },
                },
                "loop-scroll2": {
                    from: {
                        transform: "translateX(100%)",
                    },
                    to: {
                        transform: "translateX(0)",
                    },
                },
            },
            backgroundImage: {
                contact: "url('/contact.svg')",
                IA: "url('/ai.jpg')",
                bw: "url('/bw1.jpg')",
                koi2: "url('/koi2.jpg')",
                koi: "url('/logo-koi.webp')",
            },
            animation: {
                /* (variable)  --> en el componente se colocaria "className:'translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:(valor)]'" */
                "fade-in":
                    "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
                "loop-scroll": "loop-scroll 10s linear infinite",
                "loop-scroll2": "loop-scroll2 10s linear infinite",
            },
        },
    },
    plugins: [],
};
