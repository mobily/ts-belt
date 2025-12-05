const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = 3;

module.exports = makeBenchmark(
	"splitEvery/chunk",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.splitEvery(input, n);
			},
			() => {
				return pipe(input, A.splitEvery(n));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, chunk } = remeda;

		return [
			() => {
				return chunk(input, n);
			},
			() => {
				return pipe(input, chunk(n));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, splitEvery } = ramda;

		return [
			() => {
				return splitEvery(n, input);
			},
			() => {
				return pipe(splitEvery(n))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, splitEvery } = rambda;

		return [
			() => {
				return splitEvery(n, input);
			},
			() => {
				return pipe(splitEvery(n))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.chunk(n, input);
			},
			() => {
				return _.pipe(_.chunk(n))(input);
			},
		];
	}),
);
