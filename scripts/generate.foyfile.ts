import { task, desc, option, strict } from 'foy'
import { compiler, beautify } from 'flowgen'

import * as globby from 'globby'
import * as path from 'path'

type Options = {
  readonly rebuild: boolean
}
type TSCOptions = {
  readonly esm: boolean
  readonly cjs: boolean
}

const defaultEncoding = { encoding: 'utf8' } as const

desc('Generate docs')
option('-r, --rebuild', 'rebuild rescript files')
strict()
task<Options>('docs', async ctx => {
  const files = await globby('src/**/index.ts')
  const ts = files.join(' ')

  ctx.fs.mkdirp('docs/api/generated')

  if (ctx.options.rebuild) {
    await ctx.exec('yarn transform typescript -r')
  }

  await ctx.exec(
    `node node_modules/.bin/jscodeshift --run-in-band --extensions=ts --parser=ts -t tools/generate-docs/index.ts ${ts}`,
  )
})

desc('Generate Flow types')
task('flow', async ctx => {
  const entryFile = await ctx.fs.readFile('index.js.flow', defaultEncoding)
  const content = entryFile.replace(/.\/dist\//g, './')
  const files = await globby('dist/**/*.d.ts')

  await ctx.fs.writeFile('dist/types/index.js.flow', content, defaultEncoding)

  const defs = files.map(filename => {
    const fullpath = path.resolve(__dirname, '..', filename)
    const flowdef = beautify(compiler.compileDefinitionFile(fullpath))
    const basename = path.basename(fullpath, '.d.ts')
    const filepath = path.dirname(fullpath)
    const definition = flowdef.replace(/import\s/g, 'import type ')

    return ctx.fs.writeFile(
      path.join(filepath, `${basename}.js.flow`),
      ['// @flow', definition].join('\n\n'),
      defaultEncoding,
    )
  })

  await Promise.all(defs)
})

desc('Generate contributors in README.md')
task('contributors', async ctx => {
  await ctx.exec('yarn all-contributors generate')
})

desc('Generate tsc')
strict()
task<TSCOptions>('tsc', async ctx => {
  await ctx.exec('yarn tsc --outDir ./dist/types')
})
