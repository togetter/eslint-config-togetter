module.exports = {
  plugins: ["prettier"],
  extends: ["airbnb/base", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
    "no-underscore-dangle": [1],
    "class-methods-use-this": [0],
    "no-restricted-globals": [0],
    "max-classes-per-file": [0],
    "prefer-destructuring": [1],
    "getter-return": [1]
  }
};
