module.exports = {
    plugins: [
      // Plugins to handle additional formats and templates
      "prettier-plugin-go-template",
    ],
  
    // General Formatting Options
    semi: true,
    singleQuote: true,
    quoteProps: "as-needed",
    endOfLine: "auto",
    trailingComma: "es5",
    tabWidth: 2,
    printWidth: 80,
    arrowParens: "always",
    bracketSpacing: true,
    htmlWhitespaceSensitivity: "css",
    bracketSameLine: true,
    embeddedLanguageFormatting: "auto",
    goTemplateBracketSpacing: true,
  
    // Overrides for Specific File Types
    overrides: [
      {
        files: ["**/*.html"],
        options: {
          parser: "go-template",
          bracketSameLine: false,
          htmlWhitespaceSensitivity: "ignore",
          goTemplateBracketSpacing: true,
        },
      },
      {
        files: ["**/*.markdown", "**/*.md"],
        options: {
          parser: "markdown",
          proseWrap: "always",
          goTemplateBracketSpacing: true,
        },
      },
      {
        files: ["**/*.yaml", "**/*.yml"],
        options: {
          parser: "yaml",
          goTemplateBracketSpacing: true,
        },
      },
      {
        files: ["**/*.json"],
        options: {
          parser: "json",
          goTemplateBracketSpacing: true,
        },
      },
      {
        files: ["**/*.js"],
        options: {
          parser: "babel",
          singleQuote: true,
          trailingComma: "es5",
          goTemplateBracketSpacing: true,
        },
      },
      {
        files: ["**/*.css"],
        options: {
          parser: "css",
        },
      },
    ],
  };