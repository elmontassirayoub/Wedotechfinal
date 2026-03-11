import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";


export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
