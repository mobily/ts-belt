const esbuild = require('esbuild')

const entryPoints = [
  'Function',
  'Array',
  'Bool',
  'Result',
  'Guards',
  'Option',
  'String',
  'Dict',
  'Number',
].map(entryPoint => `src/${entryPoint}/index.js`)
const rootPoints = ['src/index.js', 'src/pipe.js']

const handleError = () => process.exit(1)
const build = (entryPoints, options = {}) => {
  const { format = 'cjs' } = options

  return esbuild
    .build({
      entryPoints,
      bundle: true,
      format,
      outdir: `dist/${format}`,
      treeShaking: true,
      minify: false,
      external: [],
      logLevel: 'info',
      legalComments: 'none',
      ...options,
    })
    .catch(handleError)
}

build(entryPoints)
build(entryPoints, { format: 'esm' })
build(rootPoints, { bundle: false })
build(rootPoints, { bundle: false, format: 'esm' })
