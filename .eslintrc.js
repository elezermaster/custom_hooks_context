module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: "off",
        "no-tabs": 0,
        semi: 0,
        quotes: "off",
        //"space-before-function-paren": ["error", "never"],
        "spaced-comment": 0,
        "comma-spacing": "off",
        "array-bracket-spacing": ["error", "never"],
        //"object-curly-spacing": ["error", "never", {arraysInObjects: true,objectsInObjects: true}],
        "computed-property-spacing": ["error", "never"],
        //"comma-dangle": [2, "always-multiline"],
        "react/prop-types": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "comma-dangle": "off",
        "object-curly-spacing": "off",
        "space-before-function-paren": "off",
        "multiline-ternary": "off",
    }
};
