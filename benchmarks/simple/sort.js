const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
	addNative,
} = require("../utils");

const input = [1, 2, 2, 3, 3, 5, 4, 3, 2, 1];
const fn = (a, b) => (a > b ? -1 : 1);

module.exports = makeBenchmark(
	"sort",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.sort(input, fn);
			},
			() => {
				return pipe(input, A.sort(fn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, sort } = remeda;

		return [
			() => {
				return sort(input, fn);
			},
			() => {
				return pipe(input, sort(fn));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, sort } = ramda;

		return [
			() => {
				return sort(fn, input);
			},
			() => {
				return pipe(sort(fn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, sort } = rambda;

		return [
			() => {
				return sort(fn, input);
			},
			() => {
				return pipe(sort(fn))(input);
			},
		];
	}),
	addNative((native) => {
		return [
			() => {
				return native.safeSort(fn)(input);
			},
			() => {
				return native.pipe(native.safeSort(fn))(input);
			},
		];
	}),
);
