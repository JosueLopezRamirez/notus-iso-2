/* eslint-disable global-require */
// postcss.config.js
module.exports = {
    plugins: [
        require("postcss-nesting"),
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss"),
        require("autoprefixer"),
    ],
}
