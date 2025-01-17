/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./setupTests.js"],
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html', 'json-summary'],
    },
  }
})