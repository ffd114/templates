// @ts-check
import prettier from "eslint-config-prettier"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  prettier,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
)
