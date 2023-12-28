/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        lg:'4rem',
        xl:'5rem',
        '2xl':'10rem',

      },
    },
    extend: {
      colors:{
        'gradient1':'var(--color-gradient1)',
        'gradient2':'var(--color-gradient2)',
        'login':'var(--color-login)',
        'what':'var(--color-what)',
        'areyouthinkingabout':'var(--color-areyouthinkingabout)',
        'storiesbg':'var(--color-storiesbg)',
      },
      fontFamily:{
        'inter':['Inter','Sans-serif'],
        'jokerman':['jokerman','sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')],
};

