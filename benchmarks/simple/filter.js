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
const fn = (x) => x > 4;

module.exports = makeBenchmark(
	"filter",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.filter(input, fn);
			},
			() => {
				return pipe(input, A.filter(fn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, filter } = remeda;

		return [
			() => {
				return filter(input, fn);
			},
			() => {
				return pipe(input, filter(fn));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, filter } = ramda;

		return [
			() => {
				return filter(fn, input);
			},
			() => {
				return pipe(filter(fn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, filter } = rambda;

		return [
			() => {
				return filter(fn, input);
			},
			() => {
				return pipe(filter(fn))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.filter(fn, input);
			},
			() => {
				return _.pipe(_.filter(fn))(input);
			},
		];
	}),
	addNative((native) => {
		return [
			() => {
				return native.filter(fn)(input);
			},
			() => {
				return native.pipe(native.filter(fn))(input);
			},
		];
	}),
);
