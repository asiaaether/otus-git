module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "max-len": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-plusplus": "off",
    "no-param-reassign": 0,
  },
};
