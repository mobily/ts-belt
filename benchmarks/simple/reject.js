const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fn = (x) => x > 4;

module.exports = makeBenchmark(
	"reject",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.reject(input, fn);
			},
			() => {
				return pipe(input, A.reject(fn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, reject } = remeda;

		return [
			() => {
				return reject(input, fn);
			},
			() => {
				return pipe(input, reject(fn));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, reject } = ramda;

		return [
			() => {
				return reject(fn, input);
			},
			() => {
				return pipe(reject(fn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, reject } = rambda;

		return [
			() => {
				return reject(fn, input);
			},
			() => {
				return pipe(reject(fn))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.reject(fn, input);
			},
			() => {
				return _.pipe(_.reject(fn))(input);
			},
		];
	}),
);
