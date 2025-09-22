import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('../backend/ssl/privatekey.pem'),
      cert: fs.readFileSync('../backend/ssl/certificate.pem')
    },
    port: 5173
  }
})
