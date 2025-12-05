const R = require("ramda");

const testFiles = [
	"./complex/deepFlat-uniq-groupBy",
	"./complex/map-filter-reduce",
	"./simple/deepFlat",
	"./simple/difference",
	"./simple/dropWhile",
	"./simple/filter",
	"./simple/find",
	"./simple/flat",
	"./simple/flatMap",
	// './simple/forEach', // skip this one as there is no output to compare
	"./simple/fromPairs",
	"./simple/groupBy",
	"./simple/intersection",
	"./simple/intersperse",
	"./simple/map",
	"./simple/reduce",
	"./simple/reject",
	"./simple/sort",
	"./simple/splitEvery",
	"./simple/takeWhile",
	"./simple/toPairs",
	"./simple/union",
	"./simple/uniq",
	"./simple/unzip",
	"./simple/zip",
];

const skippedSuites = [
	"funkia/list", // output is not comparable
];

testFiles.forEach((testFile) => {
	const test = require(testFile);
	const firstSuite = {
		label: test.suites[0].label,
		suite: test.suites[0],
		results: {
			rawFn: test.suites[0].rawFn(),
			pipeFn: test.suites[0].pipeFn && test.suites[0].pipeFn(),
		},
	};

	for (let i = 1; i < test.suites.length; i++) {
		const suite = test.suites[i];
		if (skippedSuites.includes(suite.label)) {
			continue;
		}
		const rawFnResult = suite.rawFn();
		if (!R.equals(rawFnResult, firstSuite.results.rawFn)) {
			console.error("rawFn test", testFile);
			console.error(`${firstSuite.label} result`, firstSuite.results.rawFn);
			console.error(`${suite.label} result`, rawFnResult);
			console.error("expected results to be identical");
			process.exit(1);
		}
		if (firstSuite.results.pipeFn) {
			const pipeFnResult = suite.pipeFn();
			if (!R.equals(pipeFnResult, firstSuite.results.pipeFn)) {
				console.error("pipeFn test", testFile);
				console.error(`${firstSuite.label} result`, firstSuite.results.pipeFn);
				console.error(`${suite.label} result`, pipeFnResult);
				console.error("expected results to be identical");
				process.exit(1);
			}
		}
	}
});
