/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/bg-shorten-mobile.svg')"
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'cyan': '#2acfcf',
      'darkViolet': 'rgb(59, 48, 84)',
      'red': 'rgb(244, 98, 98)',
      'gray': 'rgb(191, 191, 191)',
      'grayViolet': 'rgb(158, 154, 167)',
      'darkBlue': 'rgb(53, 50, 62)',
      'veryDarkViolet': 'rgb(35, 33, 39)',
      'white': 'rgb(255 255 255)',
      'bgGray': 'rgb(226 232 240)',
    },
    gridTemplateRows: {
      'layout': 'repeat(auto-fill, 100px)',
    }
  },
  plugins: [],
}
