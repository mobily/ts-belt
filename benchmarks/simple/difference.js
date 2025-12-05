const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const xs = [1, 2, 3, 4];
const ys = [3, 4, 5, 6];

module.exports = makeBenchmark(
	"difference",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.difference(xs, ys);
			},
			() => {
				return pipe(xs, A.difference(ys));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, difference } = remeda;

		return [
			() => {
				return difference(xs, ys);
			},
			() => {
				return pipe(xs, difference(ys));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, difference } = ramda;

		return [
			() => {
				return difference(xs, ys);
			},
			() => {
				return pipe(difference(xs))(ys);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, difference } = rambda;

		return [
			() => {
				return difference(xs, ys);
			},
			() => {
				return pipe(difference(xs))(ys);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.difference(xs, ys);
			},
			() => {
				return _.pipe(_.difference(xs))(ys);
			},
		];
	}),
);
