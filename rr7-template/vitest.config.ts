import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()] as any,
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    exclude: [
      '**/node_modules/**',
      '**/build/**',
      '**/tests/e2e/**', // Exclude Playwright tests
    ],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup/test-setup.ts', './tests/setup/mocks.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/', '**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', 'build/'],
    },
  },
});
