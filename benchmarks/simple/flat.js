const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
	addNative,
} = require("../utils");

const input = [[1, 2], 3, [4, 5], [5, [6, [7, 8]]], 9];

module.exports = makeBenchmark(
	"flat",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.flat(input);
			},
			() => {
				return pipe(input, A.flat);
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, flatten } = remeda;

		return [
			() => {
				return flatten(input);
			},
			() => {
				return pipe(input, flatten());
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, unnest } = ramda;

		return [
			() => {
				return unnest(input);
			},
			() => {
				return pipe(unnest)(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.flatten(input);
			},
			() => {
				return _.pipe(_.flatten)(input);
			},
		];
	}),
	addNative((native) => {
		return [
			() => {
				return native.flat(input);
			},
			() => {
				return native.pipe(native.flat)(input);
			},
		];
	}),
);
