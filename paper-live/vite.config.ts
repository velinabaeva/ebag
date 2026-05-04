import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// Default: HTTP — avoids blank page / certificate interstitials on localhost.
// Use `npm run dev:https` for https://localhost:5174 (accept the self-signed cert in the browser).
const useHttps = process.env.VITE_DEV_HTTPS === '1'

/**
 * GitHub project pages are served from https://<user>.github.io/<repo>/ — asset URLs must use that prefix.
 * `import.meta.env.BASE_URL` in the app (e.g. public images) follows this value.
 */
function resolveBase(): string {
  const explicit = process.env.VITE_BASE_PATH?.trim()
  if (explicit) {
    const withSlash = explicit.startsWith('/') ? explicit : `/${explicit}`
    return withSlash.endsWith('/') ? withSlash : `${withSlash}/`
  }
  // Vercel / Netlify etc. serve this app at the deployment root — never use /repo/ base here.
  if (process.env.VERCEL === '1') return '/'
  const ghRepo = process.env.GITHUB_REPOSITORY
  if (process.env.GITHUB_ACTIONS === 'true' && ghRepo?.includes('/')) {
    const repoName = ghRepo.split('/')[1]
    if (repoName) return `/${repoName}/`
  }
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  base: resolveBase(),
  plugins: [react(), ...(useHttps ? [basicSsl()] : [])],
  server: {
    port: 5174,
    host: true,
    strictPort: true,
  },
})
