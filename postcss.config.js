// module.exports = {
//   plugins: [require('tailwindcss'), require('autoprefixer')]
// }

const tailwindcss = require('tailwindcss')
module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')]
}
