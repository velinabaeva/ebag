import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// Default: HTTP — avoids blank page / certificate interstitials on localhost.
// Use `npm run dev:https` for https://localhost:5174 (accept the self-signed cert in the browser).
const useHttps = process.env.VITE_DEV_HTTPS === '1'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ...(useHttps ? [basicSsl()] : [])],
  server: {
    port: 5174,
    host: true,
    strictPort: true,
  },
})
