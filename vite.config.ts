import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  css: { modules: { localsConvention: "camelCase" } },
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 3000
  },
  build: { outDir: "build" }
})