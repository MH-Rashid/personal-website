{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended"
    ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    // "react-refresh/only-export-components": [
    //   "warn",
    //   { "allowConstantExport": true }
    // ],
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "react/require-render-return": "warn"
  }
}