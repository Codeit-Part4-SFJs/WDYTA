exports = {
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:storybook/recommended",
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  plugins: ["prettier", "react", "react-hooks"],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "consistent-return": 0,
    "react/no-unknown-property": 0,
    "prettier/prettier": ["error", { endOfLine: "auto", useTabs: false }],
    "arrow-body-style": "off",
    "import/no-unresolved": "off",
    "import/order": "off",
    "no-unsafe-optional-chaining": "off",
    "no-shadow": "off",
    "dot-notation": "off",
    "object-shorthand": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
  ],
};
