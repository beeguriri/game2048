module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'import', '@typescript-eslint', 'react-refresh'],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "linebreak-style": 0,
    "react/react-in-jsx-scope": 0,
    "comma-dangle": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-unresolved": 0,
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "react/jsx-props-no-spreading": 0,
    "consistent-return": 2,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "no-console": 2,
  },
}
