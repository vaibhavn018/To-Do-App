/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-color": "#303030",
                "secondary-color": "#5E5E5E",
                "font-color-1": "#C6C6C6",
                "font-color-2": "#4B4A54",
            },
        },
    },
    plugins: [],
};
