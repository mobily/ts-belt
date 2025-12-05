const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
	addNative,
} = require("../utils");

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fn = (acc, x) => {
	acc.push(x * 2);
	return acc;
};

module.exports = makeBenchmark(
	"reduce",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.reduce(input, [], fn);
			},
			() => {
				return pipe(input, A.reduce([], fn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, reduce } = remeda;

		return [
			() => {
				return reduce(input, fn, []);
			},
			() => {
				return pipe(input, reduce(fn, []));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, reduce } = ramda;

		return [
			() => {
				return reduce(fn, [], input);
			},
			() => {
				return pipe(reduce(fn, []))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, reduce } = rambda;

		return [
			() => {
				return reduce(fn, [], input);
			},
			() => {
				return pipe(reduce(fn, []))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.reduce(fn, [], input);
			},
			() => {
				return _.pipe(_.reduce(fn, []))(input);
			},
		];
	}),
	addNative((native) => {
		return [
			() => {
				return native.reduce(fn, [])(input);
			},
			() => {
				return native.pipe(native.reduce(fn, []))(input);
			},
		];
	}),
);
