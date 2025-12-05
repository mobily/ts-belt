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
	"union",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.union(xs, ys);
			},
			() => {
				return pipe(xs, A.union(ys));
			},
		];
	}),
	// addRemeda(remeda => {
	//   const { pipe, union } = remeda

	//   return [
	//     () => {
	//       return union(xs, ys)
	//     },
	//     () => {
	//       return pipe(xs, union(ys))
	//     },
	//   ]
	// }),
	addRamda((ramda) => {
		const { pipe, union } = ramda;

		return [
			() => {
				return union(xs, ys);
			},
			() => {
				return pipe(union(xs))(ys);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, union } = rambda;

		return [
			() => {
				return union(xs, ys);
			},
			() => {
				return pipe(union(xs))(ys);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.union(ys, xs);
			},
			() => {
				return _.pipe(_.union(ys))(xs);
			},
		];
	}),
);
