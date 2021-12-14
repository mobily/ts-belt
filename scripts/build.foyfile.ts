import { task, desc, option, strict } from 'foy'
import * as globby from 'globby'

type Options = {
  readonly runTests: boolean
}

type DevOptions = {
  readonly namespace: string
  readonly test: string
}

desc('Build dist')
option('-t, --run-tests', 'run tests')
strict()
task<Options>('dist', async ctx => {
  await ctx.exec([
    'yarn clean',
    'yarn re:clean',
    'yarn re:build',
    'yarn transform all',
    'yarn generate docs',
    'node esbuild.config.js',
  ])

  const files = await globby('dist/**/index.js')
  const js = files.join(' ')

  await ctx.exec(
    `node node_modules/.bin/jscodeshift --run-in-band -t tools/javascript-codemods/post/index.ts ${js}`,
  )

  await ctx.exec(['yarn generate tsc --esm --cjs', 'yarn generate flow'])

  if (ctx.options.runTests) {
    await ctx.exec('yarn test run -c')
  }
})

desc('Build for development purposes')
option('-t, --test <name>', 'run tests for a single file')
option('-n, --namespace <name>', 'namespace')
strict()
task<DevOptions>('dev', async ctx => {
  if (!ctx.options.namespace) {
    throw new Error('-n is required')
  }

  await ctx.exec([
    `yarn transform all -r -n ${ctx.options.namespace}`,
    'node esbuild.config.js',
  ])

  const files = await globby(`dist/**/${ctx.options.namespace}/index.js`)
  const js = files.join(' ')

  await ctx.exec(
    `node node_modules/.bin/jscodeshift --run-in-band -t tools/javascript-codemods/post/index.ts ${js}`,
  )

  await ctx.exec('yarn generate tsc --cjs')

  if (ctx.options.test) {
    await ctx.exec(
      `yarn test run -n ${ctx.options.namespace} -f ${ctx.options.test}`,
    )
  }
})
