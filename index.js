module.exports = {
  plugins: ["prettier"],
  extends: ["airbnb/base", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
    "max-len": [2, 120, 4],
    "class-methods-use-this": [0],
    "no-underscore-dangle": [1],
    "no-mixed-operators": [1],
    "no-plusplus": [
      2,
      {
        allowForLoopAfterthoughts: true
      }
    ],
    "no-restricted-globals": [0],
    "function-paren-newline": [0],
    "prefer-destructuring": [1],
    "padded-blocks": [0],
    "getter-return": [1],
    "object-curly-newline": [1],
    "max-classes-per-file": [0]
  }
};
