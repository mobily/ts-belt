const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fn = (x) => x < 5;

module.exports = makeBenchmark(
	"dropWhile",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.dropWhile(input, fn);
			},
			() => {
				return pipe(input, A.dropWhile(fn));
			},
		];
	}),
	// addRemeda(remeda => {
	//   const { pipe, dropWhile } = remeda

	//   return [
	//     () => {
	//       return dropWhile(input, fn)
	//     },
	//     () => {
	//       return pipe(input, dropWhile(fn))
	//     },
	//   ]
	// }),
	addRamda((ramda) => {
		const { pipe, dropWhile } = ramda;

		return [
			() => {
				return dropWhile(fn, input);
			},
			() => {
				return pipe(dropWhile(fn))(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, dropWhile } = rambda;

		return [
			() => {
				return dropWhile(fn, input);
			},
			() => {
				return pipe(dropWhile(fn))(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.dropWhile(fn, input);
			},
			() => {
				return _.pipe(_.dropWhile(fn))(input);
			},
		];
	}),
);
