const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
	addFunkiaList,
	addNative,
} = require("../utils");
const L = require("list");
const R = require("ramda");

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const fn = (x) => x * 2;

module.exports = makeBenchmark(
	"flatMap",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.flatMap(input, fn);
			},
			() => {
				return pipe(input, A.flatMap(fn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, flatMap } = remeda;

		return [
			() => {
				return flatMap(input, fn);
			},
			() => {
				return pipe(input, flatMap(fn));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, chain } = ramda;

		return [
			() => {
				return chain(fn, input);
			},
			() => {
				return pipe(chain(fn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, chain } = rambda;

		return [
			() => {
				return chain(fn, input);
			},
			() => {
				return pipe(chain(fn))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.flatMap(fn, input);
			},
			() => {
				return _.pipe(_.flatMap(fn))(input);
			},
		];
	}),
);
