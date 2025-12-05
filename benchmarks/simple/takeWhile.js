const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fn = (x) => x < 4;

module.exports = makeBenchmark(
	"takeWhile",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.takeWhile(input, fn);
			},
			() => {
				return pipe(input, A.takeWhile(fn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, takeWhile } = remeda;

		return [
			() => {
				return takeWhile(input, fn);
			},
			() => {
				return pipe(input, takeWhile(fn));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, takeWhile } = ramda;

		return [
			() => {
				return takeWhile(fn, input);
			},
			() => {
				return pipe(takeWhile(fn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, takeWhile } = rambda;

		return [
			() => {
				return takeWhile(fn, input);
			},
			() => {
				return pipe(takeWhile(fn))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.takeWhile(fn, input);
			},
			() => {
				return _.pipe(_.takeWhile(fn))(input);
			},
		];
	}),
);
