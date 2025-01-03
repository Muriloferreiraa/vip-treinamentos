import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error", // Proíbe o uso de 'any'
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Ignora variáveis que começam com '_'
    },
  },
];

export default eslintConfig;
