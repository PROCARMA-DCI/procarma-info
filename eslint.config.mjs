import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // allow `any` type
      "@typescript-eslint/no-unused-vars": "off", // allow unused variables
      "no-unused-vars": "off", // base rule (for JS)
      "no-console": "off", // allow console.log
      "no-empty-function": "off", // allow empty functions
      "@typescript-eslint/no-empty-function": "off",
    },
  },
];

export default eslintConfig;
