/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                secondaryBackground: "var(--secondary-background)",
                primary: "var(--primary)",
            },
        },
    },
    plugins: [],
};
