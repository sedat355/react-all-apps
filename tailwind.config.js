/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'blue-one': '#8AB9F1', 
        'blue-two': '#73C2FB', 
        'blue-three': '#1E90FF', 
        'blue-four': '#1F75FE', 
        'blue-five': '#0000FF',
        'red-one': '#e63946', 
        'orange-one': '#ff6700', 
        'orange-two': '#e07a5f', 
        'green-one': '#588157', 
        'green-two': '#198754', 
        'yellow-one': '#ffc300', 
        'gray-one': '#adb5bd', 
        'gray-two': '#778da9', 
        'gray-three': '#415a77', 
        'black-one': '#1b263b', 
        'black-two': '#0d1b2a', 
        'black-three': '#3d405b', 
        'black-four': '#000814', 
        // possible: ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-yellow-500"],
      }
    },
  },
  plugins: [],
}

