module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
  },
};
