module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["build", ".eslintrc.cjs", "webpack.config.ts"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "semi": ["error", "always", { "omitLastInOneLineBlock": false }],
        "comma-dangle": ["error", "never"],
        quotes: ["error", "double"],
        "react/prop-types": [0],
        "indent": ["error", "tab", { "SwitchCase": 1 }],
        "no-undef": "error",
        "@typescript-eslint/no-restricted-types": "off",
        "no-mixed-spaces-and-tabs": "error",
        "array-bracket-spacing": ["error", "never"],
    },
}