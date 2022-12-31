import { defineConfig } from "vite";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  optimizeDeps: {
    disabled: false,
  },
  plugins: [react(), eslintPlugin()],
  // prevents vite from hiding rust errors
  clearScreen: false,
  // Tauri expects a fixed port, otherwise fail
  server: {
    strictPort: true,
  },
  // env prefixes for Tauri APIs
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    target:
      process.env.TAURI_PLATFORM === "windows" ? "chrome105" : "chrome105",
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    sourcemap: !!process.env.TAURI_DEBUG,
  },
}));
