export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["/.js", "/.jsx", "/.ts", "/.tsx"],
    plugins: ["react", "@typescript-eslint"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "espree", // Default ESLint parser (or use babel-eslint for advanced cases)
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];