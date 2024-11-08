import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  typescript: true,
  vue: true,

  jsonc: false,
  yaml: false,

  ignores: [
    '**/fixtures',
  ],
})
