import { desc, option, setGlobalOptions, task } from 'foy'
import * as globby from 'globby'

setGlobalOptions({
	strict: true,
	logCommand: false,
	loading: false,
})

type Options = {
	readonly namespace: string
	readonly file: string
	readonly coverage: boolean
}

desc('Run tests')
option('-n, --namespace <name>', 'namespace')
option('-f, --file <name>', 'file')
option('-c, --coverage', 'coverage')
task<Options>('run', async ctx => {
	const coverage = ctx.options.coverage ? '--coverage' : ''

	const cmd = ['bun', 'jest', coverage]

	if (ctx.options.namespace || ctx.options.file) {
		const namespace = ctx.options.namespace || '**'
		const file = ctx.options.file ? `${ctx.options.file}.test.ts` : '*.test.ts'

		const files = await globby(`__tests__/${namespace}/${file}`)

		cmd.push(...files)

		await ctx.exec(cmd.join(' '))
		return
	}

	await ctx.exec(cmd.join(' '))
})
