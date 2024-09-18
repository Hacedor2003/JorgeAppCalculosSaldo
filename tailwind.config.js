import { addIconSelectors } from '@iconify/tailwind'
import { addDynamicIconSelectors } from '@iconify/tailwind'
import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#f0f0f0',
        principal: '#43655A',
        secundario: '#5F7F7F',
        terciario: '#829AA0'
      }
      // Aquí puedes añadir más configuraciones si es necesario
    }
  },
  plugins: [addIconSelectors(['mdi', 'mdi-light']), addDynamicIconSelectors(), flowbite.plugin()]
}
