import { desc, logger, option, setGlobalOptions, task } from 'foy'
import * as globby from 'globby'

setGlobalOptions({
	strict: true,
	logCommand: false,
	loading: false,
})

type Options = {
	readonly rebuild: boolean
	readonly namespace: string
}

desc('Transform *.gen.tsx files')
option('-r, --rebuild', 'rebuild rescript files')
option('-n, --namespace <name>', 'select a single namespace file')
task<Options>('typescript', async ctx => {
	const files = await globby(
		ctx.options.namespace
			? `src/**/${ctx.options.namespace}.gen.tsx`
			: 'src/**/*.gen.tsx',
	)
	const ts = files.join(' ')

	if (ctx.options.rebuild) {
		await ctx.exec('bun re:clean')
		await ctx.exec('bun re:build')
	}

	await ctx.exec(
		`node node_modules/.bin/jscodeshift --run-in-band --extensions=ts --parser=ts -t tools/typescript-codemods/index.ts ${ts}`,
	)

	const output = (
		await globby(
			ctx.options.namespace
				? `./src/${ctx.options.namespace}/index.ts`
				: './src/**/index.ts',
		)
	).join(' ')

	try {
		await ctx.exec(`bun biome format --write ${output}`)
	} catch (e) {
		logger.error(`error while formatting: ${output}`)
	}
})

desc('Transform *.bs.js files')
option('-r, --rebuild', 'rebuild rescript files')
option('-n, --namespace <name>', 'select a single namespace file')
task<Options>('javascript', async ctx => {
	const files = await globby(
		ctx.options.namespace
			? `src/**/${ctx.options.namespace}.bs.js`
			: 'src/**/*.bs.js',
	)
	const bs = files.join(' ')

	if (ctx.options.rebuild) {
		await ctx.exec('bun re:clean')
		await ctx.exec('bun re:build')
	}

	await ctx.exec(
		`node node_modules/.bin/jscodeshift --run-in-band -t tools/javascript-codemods/pre/index.ts ${bs}`,
	)
})

desc('Transform TS/JS files')
option('-r, --rebuild', 'rebuild rescript files')
option('-n, --namespace <name>', 'select a single namespace file')
task<Options>('all', async ctx => {
	if (ctx.options.rebuild) {
		await ctx.exec('bun re:clean')
		await ctx.exec('bun re:build')
	}

	const commands = ['typescript', 'javascript'].map(command => {
		return ctx.run(command, {
			options: {
				namespace: ctx.options.namespace,
			},
		})
	})

	await Promise.all(commands)
})
