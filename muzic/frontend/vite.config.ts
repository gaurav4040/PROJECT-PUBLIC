import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, './cert/key.pem')),
  //     cert: fs.readFileSync(path.resolve(__dirname,'./cert/cert.pem')),
  //   },
  //   port: 5173,
  // },
    server: {
    port: 5173,
    host: true, // important for external access like ngrok
    allowedHosts: ['9efd-103-171-46-19.ngrok-free.app'],
  },

  plugins: [react(),tailwindcss()],
})
