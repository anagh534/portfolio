import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  ...eslintPluginAstro.configs["flat/recommended"]
];
