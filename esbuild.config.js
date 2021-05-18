const esbuild = require('esbuild')

const { jscodeshift } = require('./plugins/esbuild-jscodeshift')
const { uncurryFunctions } = require('./plugins/uncurry-functions')
const { transformRootFunctions } = require('./plugins/transform-root-functions')
const { replaceIdentifiers } = require('./plugins/replace-identifiers')

const entryPoints = ['Function', 'Array', 'Result', 'Guards', 'Option', 'String'].map(
  entryPoint => `src/${entryPoint}/index.js`,
)
const rootPoints = ['src/index.js', 'src/pipe.js']

const handleError = () => process.exit(1)
const build = (entryPoints, options = {}) => {
  const { format = 'cjs' } = options

  return esbuild
    .build({
      entryPoints,
      splitting: format === 'esm',
      bundle: true,
      format,
      outdir: `dist/${format}`,
      plugins: [
        jscodeshift({
          exclude: ['**/node_modules/**'],
          plugins: [uncurryFunctions, transformRootFunctions, replaceIdentifiers],
        }),
      ],
      minify: false,
      external: [],
      logLevel: 'info',
      ...options,
    })
    .catch(handleError)
}

build(entryPoints)
build(entryPoints, { format: 'esm' })
build(rootPoints, { bundle: false })
build(rootPoints, { bundle: false, format: 'esm' })
