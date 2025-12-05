import { desc, option, setGlobalOptions, task } from 'foy'
import * as globby from 'globby'

setGlobalOptions({
	strict: true,
	logCommand: false,
	loading: false,
})

type Options = {
	readonly runTests: boolean
}

type DevOptions = {
	readonly namespace: string
	readonly test: string
}

desc('Build dist')
option('-t, --run-tests', 'run tests')
task<Options>('dist', async ctx => {
	await ctx.exec([
		'bun run clean',
		'bun run re:clean',
		'bun run re:build',
		'bun run transform all',
		'bun run generate docs',
		'bun run rollup -c rollup.config.js --bundleConfigAsCjs',
	])

	const files = await globby('dist/*.js')
	const js = files.join(' ')

	await ctx.exec(
		`node node_modules/.bin/jscodeshift --run-in-band -t tools/javascript-codemods/post/index.ts ${js}`,
	)

	await ctx.exec('bun generate tsc')
	await ctx.fs.copyFile('./src/global.d.ts', './dist/types/global.d.ts')
	await ctx.fs.copyFile('./src/types.ts', './dist/types/types.d.ts')

	if (ctx.options.runTests) {
		await ctx.exec('bun test run -c')
	}
})

desc('Build for development purposes')
option('-t, --test <name>', 'run tests for a single file')
option('-n, --namespace <name>', 'namespace')
task<DevOptions>('dev', async ctx => {
	if (!ctx.options.namespace) {
		throw new Error('-n is required')
	}

	await ctx.exec([
		`bun transform all -r -n ${ctx.options.namespace}`,
		'bun rollup -c rollup.config.js --bundleConfigAsCjs',
	])

	const files = await globby(`dist/*.js`)
	const js = files.join(' ')

	await ctx.exec(
		`node node_modules/.bin/jscodeshift --run-in-band -t tools/javascript-codemods/post/index.ts ${js}`,
	)

	await ctx.exec('bun generate tsc')

	if (ctx.options.test) {
		await ctx.exec(
			`bun test run -n ${ctx.options.namespace} -f ${ctx.options.test}`,
		)
	}
})
