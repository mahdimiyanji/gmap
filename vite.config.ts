import path from "path"
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
  build: { outDir: "build" },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "src": path.resolve(__dirname, "src"),
      "app": path.resolve(__dirname, "src/app"),
      "@core": path.resolve(__dirname, "src/@core"),
      "i18n": path.resolve(__dirname, "src/i18n"),
      "styles": path.resolve(__dirname, "src/styles")
    }
  }
})