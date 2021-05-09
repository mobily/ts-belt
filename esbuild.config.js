const esbuild = require('esbuild')

const { jscodeshift } = require('./plugins/esbuild-jscodeshift')
const { uncurryFunctions } = require('./plugins/uncurry-functions')
const { transformRootFunctions } = require('./plugins/transform-root-functions')

const handleError = () => process.exit(1)
const build = (outfile, options) => {
  return esbuild
    .build({
      entryPoints: ['src/index.js'],
      bundle: true,
      format: 'cjs',
      outfile: `dist/${outfile}`,
      plugins: [
        jscodeshift({
          exclude: ['**/node_modules/**'],
          plugins: [uncurryFunctions, transformRootFunctions],
        }),
      ],
      minify: false,
      external: [],
      logLevel: 'info',
      ...options,
    })
    .catch(handleError)
}

build('index.js')
build('index.min.js', { minify: true })
build('index.mjs', { format: 'esm' })
