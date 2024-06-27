const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files:["./src/**/*.{html,js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js",flowbite.content(),'node_modules/flowbite-react/lib/esm/**/*.js'],
  },
  theme: {
    extend: {
      fontSize:{
        '15xl':'12rem'
      }
    },
  },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  plugins: [flowbite.plugin(),require('@tailwindcss/forms'),require('flowbite/plugin')],
};