import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',  // For example, if you're using '@' as an alias for src
    }
  }
});
