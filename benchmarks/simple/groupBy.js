const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const input = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
];
const fn = (str) => str.length;

module.exports = makeBenchmark(
	"groupBy",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.groupBy(input, fn);
			},
			() => {
				return pipe(input, A.groupBy(fn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, groupBy } = remeda;

		return [
			() => {
				return groupBy(input, fn);
			},
			() => {
				return pipe(input, groupBy(fn));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, groupBy } = ramda;

		return [
			() => {
				return groupBy(fn, input);
			},
			() => {
				return pipe(groupBy(fn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, groupBy } = rambda;

		return [
			() => {
				return groupBy(fn, input);
			},
			() => {
				return pipe(groupBy(fn))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.groupBy(fn, input);
			},
			() => {
				return _.pipe(_.groupBy(fn))(input);
			},
		];
	}),
);
