// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       gridTemplateColumns: {
//         '13': 'repeat(13, minmax(0, 1fr))',
//       },
//       colors: {
//         blue: {
//           400: '#2589FE',
//           500: '#0070F3',
//           600: '#2F6FEB',
//         },
//       },
//     },
//     keyframes: {
//       shimmer: {
//         '100%': {
//           transform: 'translateX(100%)',
//         },
//       },
//     },
//   },
//   plugins: [require('@tailwindcss/forms')],
// };
// export default config;



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // for App Router (Next 13+)
    "./pages/**/*.{js,ts,jsx,tsx}", // if using /pages
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '230px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": "1536px",
    },

  },
  plugins: [],
}





// colors: {
//     lamaSky: "#C3EBFA",
//     lamaSkyLite: " #EDF9FD  ",
//     lamaPupale: "#CFCFF",
//     lamaPupleLight: "#F1F0FF",
//     lamalYellow: "#FAE27C",
//     lamalYellowLight: "#FEFCE8",
//     naqibBlue: "#1c58dd",
//     naqibRed: "#b92929"

//   }



// font

// font-semibold