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
        
"accent": "#00C2C6",
        
"neutral": "#008000",
        
"base-100": "#ffffff",
        
"info": "#000000",
        
"success": "#008000",
        
"warning": "#ff0000",
        
"error": "#ffffff",
        },
      },
    ],
  },
  
  plugins: [daisyui],
}

