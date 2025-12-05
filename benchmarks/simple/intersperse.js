const { makeBenchmark, addTsBelt, addRambda, addRamda } = require("../utils");

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

module.exports = makeBenchmark(
	"intersperse",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.intersperse(input, 0);
			},
			() => {
				return pipe(input, A.intersperse(0));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, intersperse } = ramda;

		return [
			() => {
				return intersperse(0, input);
			},
			() => {
				return pipe(intersperse(0))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, intersperse } = rambda;

		return [
			() => {
				return intersperse(0, input);
			},
			() => {
				return pipe(intersperse(0))(input);
			},
		];
	}),
);
