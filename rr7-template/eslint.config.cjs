// Flat config for ESLint v9+ (single source of truth)

const js = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const reactPlugin = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const importPlugin = require("eslint-plugin-import");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const prettierConfig = require("eslint-config-prettier");
const globals = require("globals");

module.exports = [
  // Global ignores so generated output isn't linted
  {
    ignores: [".react-router/**", "build/**", "dist/**", "node_modules/**"],
  },
  // Apply JS recommended only to source files
  { ...js.configs.recommended, files: ["**/*.{js,jsx,ts,tsx}"] },
  // Ensure config and build scripts (including *.config.ts) are parsed with TS
  {
    files: ["**/*.config.ts", "**/react-router.config.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      globals: { ...globals.node },
    },
    rules: {
      // TypeScript and config-specific rules
    },
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: reactPlugin,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": { typescript: {} },
    },
    rules: {
      // Include TS recommended rules
      ...tseslint.configs.recommended.rules,
      // Disable rules that conflict with Prettier
      ...prettierConfig.rules,
      // Project overrides / additions
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
      "import/no-unresolved": "off",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      // You can relax certain rules for now to reduce noise; adjust later
      "no-undef": "off", // handled by TypeScript + defined globals
    },
    ignores: ["*.config.*", "*.d.ts"],
  },
];
