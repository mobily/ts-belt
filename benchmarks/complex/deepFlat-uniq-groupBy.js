const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const input = [
	["one", "two"],
	"three",
	["four", "five"],
	["four", ["five", ["six", "seven"]]],
	"eight",
];
const groupFn = (x) => x.length;

module.exports = makeBenchmark(
	"deepFlat → uniq → groupBy",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return pipe(input, A.deepFlat, A.uniq, A.groupBy(groupFn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, flattenDeep, uniq, groupBy } = remeda;

		return [
			() => {
				return pipe(input, flattenDeep(), uniq(), groupBy(groupFn));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, flatten, uniq, groupBy } = ramda;

		return [
			() => {
				return pipe(flatten, uniq, groupBy(groupFn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, flatten, uniq, groupBy } = rambda;

		return [
			() => {
				return pipe(flatten, uniq, groupBy(groupFn))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.pipe(_.flattenDeep, _.uniq, _.groupBy(groupFn))(input);
			},
		];
	}),
);
