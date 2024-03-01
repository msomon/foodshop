/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme :{
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1200px',
      
    },
  },


  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0000ff",
        
"secondary": "#ffa500",
        
"accent": "#000000",
        
"neutral": "#008000",
        
"base-100": "#ffffff",
        
"info": "#ffff00",
        
"success": "#008000",
        
"warning": "#ff0000",
        
"error": "#ffffff",
        },
      },
    ],
  },
  
  plugins: [daisyui],
}

