const {dependencies} =require('./package.json')
const package = require('../package.json')
const _ = require('lodash/fp')
const ramda = require('ramda')
const rambda = require('rambda')
const remeda = require('remeda')
const L = require('list/curried')
const native = require('./native')

const belt = require("..");

exports.makeBenchmark = (title, ...rest) => {
	if (process.env.NODE_ENV === "test") {
		return {
			title,
			suites: rest,
		};
	}
	suite(
		`${title} ${title.includes("→") ? "" : "(single function call)"}`,
		() => {
			rest.forEach((test) => {
				benchmark(test.label, test.rawFn);
			});
		},
	);

	suite(`${title} (function call inside \`pipe\`)`, () => {
		rest.forEach((test) => {
			benchmark(test.label, test.pipeFn);
		});
	});
};

const addBenchmarkSuite = (label, module) => (mapFn) => {
	const [rawFn, pipeFn] = mapFn(module);

	return {
		label,
		rawFn,
		pipeFn,
	};
};

exports.addTsBelt = addBenchmarkSuite(`@mobily/ts-belt ${package['version']}`, belt)
exports.addRamda = addBenchmarkSuite(`ramda ${dependencies['ramda']}`, ramda)
exports.addRambda = addBenchmarkSuite(`rambda ${dependencies['rambda']}`, rambda)
exports.addRemeda = addBenchmarkSuite(`remeda ${dependencies['remeda']}`, remeda)
exports.addLodashFp = addBenchmarkSuite('lodash/fp', _)
exports.addNative = addBenchmarkSuite('native', native)
exports.addFunkiaList = addBenchmarkSuite('funkia/list', L)
