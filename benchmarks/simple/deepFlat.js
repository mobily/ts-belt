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
	"deepFlat",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.deepFlat(input);
			},
			() => {
				return pipe(input, A.deepFlat);
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, flattenDeep } = remeda;

		return [
			() => {
				return flattenDeep(input);
			},
			() => {
				return pipe(input, flattenDeep());
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, flatten } = ramda;

		return [
			() => {
				return flatten(input);
			},
			() => {
				return pipe(flatten)(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, flatten } = rambda;

		return [
			() => {
				return flatten(input);
			},
			() => {
				return pipe(flatten)(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.flattenDeep(input);
			},
			() => {
				return _.pipe(_.flattenDeep)(input);
			},
		];
	}),
	addNative((native) => {
		return [
			() => {
				return native.deepFlat(input);
			},
			() => {
				return native.pipe(native.deepFlat)(input);
			},
		];
	}),
);
