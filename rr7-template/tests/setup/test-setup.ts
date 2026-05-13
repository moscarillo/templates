import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup();
});

vi.stubEnv('DATABASE_URL', 'postgresql://test:test@localhost:5432/test');