module.exports = {
  globals: {
    cy: true,
    context: true,
    Cypress: true,
  },
  extends: [
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'no-shadow': ['error', { allow: ['state'] }],
    'no-param-reassign': [2, { props: false }],
    'no-useless-constructor': 0,
    'no-empty-function': 0,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/no-v-for-template-key': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/valid-v-slot': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/max-len': ['error', {
      code: 100,
      template: 130,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'import/order': [
      2,
      {
        pathGroups: [
          {
            pattern: 'vue{x,}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['vue{x,}'],
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'builtin',
          'external',
          [
            'internal',
            'parent',
            'sibling',
          ],
          'index',
        ],
      },
    ],
  },
};
