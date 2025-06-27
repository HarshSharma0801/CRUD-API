import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/add": "http://localhost:5000",
      "/read": "http://localhost:5000",
      "/edit": "http://localhost:5000",
      "/delete": "http://localhost:5000",
    },
  },
});
