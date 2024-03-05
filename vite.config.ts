import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://juanamaya.github.io/adivina-brawler",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
