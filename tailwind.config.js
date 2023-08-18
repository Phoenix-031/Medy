/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{,js,ts,jsx,tsx}'],
  theme: {
    fontFamily:{
      'Poppins' : 'Poppins, sans-serif',
      'Roboto' : 'Roboto, sans-serif',
      'Montserrat' : 'Montserrat, sans-serif',
      'Urbanist' : 'Urbanist, sans-serif',
      'RobotoS' : 'Roboto Slab, serif',
      'Ubuntu' : 'Ubuntu, sans-serif',
      'Varela' : 'Varela, sans-serif',
      'EB Garamond' : 'EB Garamond, serif',
    },
    extend: { 
      borderWidth:{
        '1' : '1.5px',
      },
      backgroundColor:{
        'bg-primary' : '#060606',
        'bg-secondary' : '#131417',
      },
      gradientColorStops:{
        'g-stop-left' : '#e812a6',
        'g-stop-right' : '#7d08b8',
      },
      borderColor:{
        'border-primary' : '#222529',
      },
      textColor:{
        'text-primary' : '#131417',
      }
    },
  },
  plugins: [],
}

