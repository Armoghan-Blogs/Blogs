import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import html from "eslint-plugin-html";
import markdown from "eslint-plugin-markdown";
import css from "eslint-plugin-css-modules";
import json from 'eslint-plugin-json';


export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.github/**",
      "**/.vscode/**",
      "**/.git/**",
      "**/.devcontainer/**",
      "**/.husky/**",
      "**/resources/**",
      "**/themes/**",
      "**/public/**",
      "**/static/**",
      "**/package.json",
      "**/package-lock.json",
      "**/.prettierrc.js",
      "**/.eslintignore",
      "**/commitlint.config.js"
    ],
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    files:['**/*.js'],
    linterOptions: {
      noInlineConfig: true,
    },
    plugins: {prettier},
    rules: {
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "comma-dangle": ["error", "always-multiline"],
      indent: ["error", 2],
      "lines-around-comment": ["error", { beforeBlockComment: true }],
      "no-unused-vars": [
        "error",
        { vars: "all", args: "none", ignoreRestSiblings: false },
      ],
      "no-extra-semi": "error",
      "no-console": "warn",
      "object-curly-spacing": ["error", "always"],
      "space-in-parens": ["error", "never"],
      camelcase: ["error", { properties: "always" }],
      "function-call-argument-newline": ["error", "consistent"]
    },
  },
  {
    files: ["**/*.html"],
    linterOptions: {
      noInlineConfig: true,
    },
    plugins: {html},
    rules: {
      "no-console": "warn",
      camelcase: ["error", { properties: "always" }],
    },
  },
  {
    files: ["**/*.md"],
    plugins: {markdown},
    processor: "markdown/markdown",
},
{
  files: ["**/*.css"],
  plugins: {css},
  rules: {
    "css/no-undef-class": "error",
    "css/no-unused-class": "warn"
  }
},
{
  files: ["**/*.json"],
  ...json.configs["recommended"],
}
];