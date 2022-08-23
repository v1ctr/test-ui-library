const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          tailwindcss()
        ],
        inject: true,
        extract: false,
        minimize: true
      })
    );
    return config;
  },
};