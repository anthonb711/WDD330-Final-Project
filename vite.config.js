import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        summary: resolve(__dirname, "src/breach-summary/index.html"),
        details: resolve(__dirname, "src/breach-detail/index.html"),
      },
    },
  },
});
