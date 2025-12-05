import { desc, option, setGlobalOptions, task } from 'foy'

import * as globby from 'globby'

setGlobalOptions({
	strict: true,
	logCommand: false,
	loading: false,
})

type Options = {
	readonly rebuild: boolean
}
type TSCOptions = {
	readonly esm: boolean
	readonly cjs: boolean
}

desc('Generate docs')
option('-r, --rebuild', 'rebuild rescript files')
task<Options>('docs', async ctx => {
	const files = await globby('src/**/index.ts')
	const ts = files.join(' ')

	ctx.fs.mkdirp('docs/api/generated')

	if (ctx.options.rebuild) {
		await ctx.exec('bun transform typescript -r')
	}

	await ctx.exec(
		`node node_modules/.bin/jscodeshift --run-in-band --extensions=ts --parser=ts -t tools/generate-docs/index.ts ${ts}`,
	)
})

desc('Generate contributors in README.md')
task('contributors', async ctx => {
	await ctx.exec('bun all-contributors generate')
})

desc('Generate tsc')
task<TSCOptions>('tsc', async ctx => {
	await ctx.exec(
		'bun tsc --outDir ./dist/types --project ./tsconfig.build.json',
	)
})
