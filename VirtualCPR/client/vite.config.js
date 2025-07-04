import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/add": "http://localhost:5001",
      "/read": "http://localhost:5001",
      "/edit": "http://localhost:5001",
      "/delete": "http://localhost:5001",
    },
  },
});
