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
const fn = (x) => x;

module.exports = makeBenchmark(
	"forEach",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.forEach(input, fn);
			},
			() => {
				return pipe(input, A.forEach(fn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, forEach } = remeda;

		return [
			() => {
				return forEach(input, fn);
			},
			() => {
				return pipe(input, forEach(fn));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, forEach } = ramda;

		return [
			() => {
				return forEach(fn, input);
			},
			() => {
				return pipe(forEach(fn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, forEach } = rambda;

		return [
			() => {
				return forEach(fn, input);
			},
			() => {
				return pipe(forEach(fn))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.forEach(fn, input);
			},
			() => {
				return _.pipe(_.forEach(fn))(input);
			},
		];
	}),
	addNative((native) => {
		return [
			() => {
				return native.forEach(fn)(input);
			},
			() => {
				return native.pipe(native.forEach(fn))(input);
			},
		];
	}),
);
