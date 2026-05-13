import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    // Exclude server-only dependencies from SSR bundling
    noExternal: [],
    external: ["playwright", "playwright-core", "chromium-bidi", "@playwright/test"],
  },
  optimizeDeps: {
    // Exclude Playwright from dependency pre-bundling for client
    exclude: ["playwright", "playwright-core", "chromium-bidi", "@playwright/test"],
  },
  build: {
    rollupOptions: {
      // Additional external configuration for production builds
      external: (id) => {
        return (
          id.includes("chromium-bidi") || id.includes("playwright") || id.includes("@playwright")
        );
      },
    },
  },
});
