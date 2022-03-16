/* eslint-disable global-require */
const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

module.exports = {
    content: [
        "./public/**/*.html",
        "./public/*.html",
        "./src/**/*.js",
        "./src/*.js",
        "./src/**/*.html",
        "./src/*.html",
        "./public/**/*.js",
        "./public/*.js",
    ],
    theme: {
        fontFamily: {
            roboto: ["Roboto"],
        },
        colors: {
            ...colors,
        },
        extend: {
            colors: {
                primary: {
                    120: "#002638",
                    110: "#00111A",
                    100: "#00263B",
                    80: "#006B9E",
                    60: "#7DA2B2",
                    50: "#A9BFC7",
                    20: "#F2FBFF",
                },
                neutral: {
                    black: "#000000",
                    white: "#FFFFFF",
                    gray: {
                        110: "#3F4345",
                        100: "#737B80",
                        70: "#A7AFB5",
                        50: "#E0E7EB",
                        20: "#EDF1F3",
                        10: "F8FCFE",
                    },
                },
                table: {
                    scrollbar: "#ECF1F3",
                },
                "light-brown": {
                    100: "#EDECE8",
                    90: "#EBEAE6",
                    70: "#FAF9F5",
                },
                semantic: {
                    success: "#00695C",
                    error: "#B71C1C",
                    warning: "#F57C00",
                    information: "#039BE5",
                },
                gradient: {
                    "total-claim": {
                        primary: "#A9BFC7",
                        secondary: "FFFFFF",
                    },
                    exeptions: {
                        primary: "#A9BFC7",
                        secondary: "FFFFFF",
                    },
                    "paid-claims": {
                        primary: "#226B9E",
                        secondary: "#359AE2",
                    },
                    background: {
                        primary: "#124366",
                        secondary: "#000000",
                    },
                },
            },
            minHeight: {
                "screen-75": "75vh",
            },
            fontSize: {
                55: "55rem",
            },
            opacity: {
                80: ".8",
            },
            zIndex: {
                2: 2,
                3: 3,
            },
            inset: {
                "-100": "-100%",
                "-225-px": "-225px",
                "-160-px": "-160px",
                "-150-px": "-150px",
                "-94-px": "-94px",
                "-50-px": "-50px",
                "-29-px": "-29px",
                "-20-px": "-20px",
                "25-px": "25px",
                "40-px": "40px",
                "95-px": "95px",
                "145-px": "145px",
                "195-px": "195px",
                "210-px": "210px",
                "260-px": "260px",
            },
            height: {
                "95-px": "95px",
                "70-px": "70px",
                "350-px": "350px",
                "600-px": "600px",
            },
            maxHeight: {
                "860-px": "860px",
            },
            maxWidth: {
                "100-px": "100px",
                "120-px": "120px",
                "150-px": "150px",
                "180-px": "180px",
                "200-px": "200px",
                "210-px": "210px",
                "580-px": "580px",
            },
            minWidth: {
                "140-px": "140px",
                48: "12rem",
            },
            backgroundSize: {
                full: "100%",
            },
        },
    },
    variants: [
        "responsive",
        "group-hover",
        "focus-within",
        "first",
        "last",
        "odd",
        "even",
        "hover",
        "focus",
        "active",
        "visited",
        "disabled",
    ],
    plugins: [
        require("@tailwindcss/forms"),
        plugin(({ addComponents, theme }) => {
            const screens = theme("screens", {})
            addComponents([
                {
                    ".container": { width: "100%" },
                },
                {
                    [`@media (min-width: ${screens.sm})`]: {
                        ".container": {
                            "max-width": "640px",
                        },
                    },
                },
                {
                    [`@media (min-width: ${screens.md})`]: {
                        ".container": {
                            "max-width": "768px",
                        },
                    },
                },
                {
                    [`@media (min-width: ${screens.lg})`]: {
                        ".container": {
                            "max-width": "1024px",
                        },
                    },
                },
                {
                    [`@media (min-width: ${screens.xl})`]: {
                        ".container": {
                            "max-width": "1280px",
                        },
                    },
                },
                {
                    [`@media (min-width: ${screens["2xl"]})`]: {
                        ".container": {
                            "max-width": "1280px",
                        },
                    },
                },
            ])
        }),
    ],
}
