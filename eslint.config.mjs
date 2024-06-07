import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error", // let a; then you must defined a value in it after a while.
            "no-console": "warn",
            "no-const-assign": "error",
            "no-unused-expressions": "error",
            "prefer-const": "error", //if a variable did not reassign, convert it into const instead of let.
        },
    },
    {
        ignores: ["./dist"], // Exclude the dist folder
    },
    {
        files: ["src/**/*.ts"], // Include all TypeScript files in the src folder
    },
];
