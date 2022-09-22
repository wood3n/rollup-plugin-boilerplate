module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": ["@typescript-eslint"],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "node/exports-style": ["error", "module.exports"],
    "node/file-extension-in-import": ["error", "always"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error",
    "object-curly-spacing": ["error", "always"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "key-spacing": ["error", { "afterColon": true }],
    "space-before-function-paren": ["error", { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
    "func-call-spacing": ["error", "never"],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "always" }]
  }
};