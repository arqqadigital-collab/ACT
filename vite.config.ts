import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/strapi": {
        target: "https://positive-actor-b87a792057.strapiapp.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/strapi/, ""),
      },
      "/api/strapi": {
        target: "https://positive-actor-b87a792057.strapiapp.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/strapi/, ""),
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
