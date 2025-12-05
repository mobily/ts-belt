import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

const plugins = [
	resolve({
		extensions: ['.mjs', '.js', '.ts'],
		mainFields: ['module', 'jsnext', 'main'],
		preferBuiltins: false,
		browser: true,
	}),
	commonjs({
		ignoreGlobal: true,
		include: /\/node_modules\//,
		extensions: ['.mjs', '.js', '.ts'],
	}),
	terser({
		warnings: true,
		ecma: 2015,
		keep_fnames: true,
		ie8: false,
		compress: {
			pure_getters: true,
			toplevel: true,
			booleans_as_integers: false,
			keep_fnames: true,
			keep_fargs: true,
			if_return: false,
			ie8: false,
			sequences: false,
			loops: false,
			conditionals: false,
			join_vars: false,
		},
		mangle: {
			module: true,
			keep_fnames: true,
		},
		output: {
			beautify: true,
			braces: true,
			indent_level: 2,
		},
	}),
]

const output = format => {
	const extension = format === 'esm' ? '.mjs' : '.js'
	return {
		chunkFileNames: '[name]-[hash]' + extension,
		entryFileNames: '[name]' + extension,
		dir: './dist',
		exports: 'named',
		sourcemap: false,
		indent: false,
		freeze: false,
		strict: false,
		format,
		esModule: format !== 'esm',
		externalLiveBindings: format !== 'esm',
		generatedCode: {
			preset: 'es5',
			reservedNamesAsProps: false,
			objectShorthand: false,
			constBindings: false,
		},
	}
}

const config = {
	input: {
		index: './src/index.js',
		pipe: './src/pipe.js',
		flow: './src/flow.js',
		Array: './src/Array/index.js',
		AsyncData: './src/AsyncData/index.js',
		AsyncDataResult: './src/AsyncDataResult/index.js',
		AsyncOption: './src/AsyncOption/index.js',
		AsyncResult: './src/AsyncResult/index.js',
		Bool: './src/Bool/index.js',
		Dict: './src/Dict/index.js',
		Function: './src/Function/index.js',
		Guards: './src/Guards/index.js',
		Number: './src/Number/index.js',
		Option: './src/Option/index.js',
		Result: './src/Result/index.js',
		String: './src/String/index.js',
	},
	onwarn: () => {},
	external: () => false,
	plugins,
	treeshake: {
		unknownGlobalSideEffects: false,
		tryCatchDeoptimization: false,
		moduleSideEffects: false,
	},
	output: [output('esm'), output('cjs')],
}

export default config
