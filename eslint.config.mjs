import babelEslintParser from "@babel/eslint-parser";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["*.js", "*.jsx"],
    plugins: ["react", "react-hooks", "import", "next"],
    extends: [
      "next",
      "next/core-web-vitals",
      "plugin:react-hooks/recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "@babel/eslint-parser",
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["next/babel"],
        },
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
  {
    files: ["*.ts", "*.tsx"],
    plugins: ["react", "react-hooks", "@typescript-eslint", "import", "next"],
    extends: [
      "next",
      "next/core-web-vitals",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "@typescript-eslint/parser",
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
