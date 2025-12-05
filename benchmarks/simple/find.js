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
const fn = (x) => x > 5;

module.exports = makeBenchmark(
	"find",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.find(input, fn);
			},
			() => {
				return pipe(input, A.find(fn));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, find } = remeda;

		return [
			() => {
				return find(input, fn);
			},
			() => {
				return pipe(input, find(fn));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, find } = ramda;

		return [
			() => {
				return find(fn, input);
			},
			() => {
				return pipe(find(fn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, find } = rambda;

		return [
			() => {
				return find(fn, input);
			},
			() => {
				return pipe(find(fn))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.find(fn, input);
			},
			() => {
				return _.pipe(_.find(fn))(input);
			},
		];
	}),
	addNative((native) => {
		return [
			() => {
				return native.find(fn)(input);
			},
			() => {
				return native.pipe(native.find(fn))(input);
			},
		];
	}),
);
