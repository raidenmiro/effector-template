const { configure, presets } = require('eslint-kit');
const prettierConfigStandard = require('prettier-config-standard');

module.exports = configure({
  presets: [
    presets.node(),
    presets.imports({
      sort: { newline: false },
    }),
    presets.typescript({
      root: '.',
      tsconfig: 'tsconfig.json',
    }),
    presets.prettier({
      ...prettierConfigStandard,
      semi: true,
      parser: 'typescript',
      singleQuote: true,
      trailingComma: 'es5',
      proseWrap: 'never',
      arrowParens: 'always',
      tabWidth: 2,
    }),
    presets.react({
      version: 'detect',
      newJSXTransform: true,
    }),
    presets.effector(),
  ],
});
