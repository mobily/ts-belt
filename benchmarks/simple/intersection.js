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
	"intersection",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.intersection(xs, ys);
			},
			() => {
				return pipe(xs, A.intersection(ys));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, intersection } = remeda;

		return [
			() => {
				return intersection(xs, ys);
			},
			() => {
				return pipe(xs, intersection(ys));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, intersection } = ramda;

		return [
			() => {
				return intersection(xs, ys);
			},
			() => {
				return pipe(intersection(xs))(ys);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, intersection } = rambda;

		return [
			() => {
				return intersection(xs, ys);
			},
			() => {
				return pipe(intersection(xs))(ys);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.intersection(xs, ys);
			},
			() => {
				return _.pipe(_.intersection(xs))(ys);
			},
		];
	}),
);
