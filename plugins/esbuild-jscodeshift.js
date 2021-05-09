const fs = require('fs')
const jscodeshift = require('jscodeshift')
const minimatch = require('minimatch')

exports.jscodeshift = (options = {}) => ({
  name: 'jscodeshift',
  setup(build) {
    const transform = options => {
      const { plugins, contents } = options

      const result = plugins.reduce((acc, pluginFn) => {
        return pluginFn(jscodeshift, acc)
      }, contents)

      return {
        contents: result,
      }
    }

    build.onLoad({ filter: /.*/, namespace: '' }, async args => {
      const contents = await fs.promises.readFile(args.path, 'utf8')

      return options.exclude.some(excludePath => minimatch(args.path, excludePath))
        ? { contents }
        : transform({ ...options, contents })
    })
  },
})
