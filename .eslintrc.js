module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended" // Add TypeScript recommended rules
    ],
    "overrides": [
        {
            "files": [
                "*.ts",
                "*.tsx"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaVersion": 2015,
                "sourceType": "module"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint" // Add TypeScript plugin
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        'react/jsx-indent': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-this-alias": "off",
        "react-hooks/exhaustive-deps": "off",
        "react-hooks/rules-of-hooks": "off",
        "react-internal/no-production-logging": "off",
        "react-internal/prod-error-codes": "off",
        "jsx-a11y/anchor-has-content": "off",
        "react-internal/safe-string-coercion": "off",
        'no-shadow': "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off"
    },
    globals: {
        __IS_DEV__: true,
    }
}
