module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "react",
    "react-hooks",
    "prettier",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.cjs"],
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    quotes: [2, "double", { avoidEscape: true }],
    "prettier/prettier": ["error", { singleQuote: false }],
    "no-useless-concat": "off",
  },
};
