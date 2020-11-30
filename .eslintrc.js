module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-unused-vars': 0,
    'arrow-parens': [1, 'as-needed'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/member-delimiter-style': [0, 'none'],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-namespace': [2, { allowDeclarations: true }],
  },
}
