/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/partials/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'i-primary': '#137547',
        'i-secondary': '#01257D',
        'i-secondary-50': '#eaecff',
        'i-secondary-100': '#c6caf0',
        'i-secondary-200': '#a1a6df',
        'i-secondary-300': '#7c82d0',
        'i-secondary-400': '#575fc2',
        'i-secondary-500': '#3d45a8',
        'i-secondary-600': '#2f3684',
        'i-secondary-700': '#212760',
        'i-secondary-800': '#12173c',
        'i-secondary-900': '#05071a',
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: '#137547',
          secondary: '#3943B7',
          accent: '#00FFFF',
          neutral: '#271F29',
          'base-100': '#FFFFFF',
          info: '#588AEE',
          success: '#6EE7B1',
          warning: '#936E10',
          error: '#F83C16',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
