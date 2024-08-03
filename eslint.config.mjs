import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPlugin from "eslint-config-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default tseslint.config(
    {
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            prettier: prettierPlugin,
        },
    },
    {
        ignores: [
            "node_modules",
            "dist",
            "dev",
            "eslint.config.js",
            "postcss.config.js",
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021,
            },
            parserOptions: {
                project: "tsconfig.json",
            },
        },
    },
    {
        files: ["**/*.ts"],
        rules: {
            ...prettierPlugin.configs.recommended.rules,
            ...eslintConfigPlugin.rules,
            "no-var": "error",
        },
    },
);
