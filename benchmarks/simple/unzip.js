const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const input = [
	[1, 9],
	[2, 8],
	[3, 7],
	[4, 6],
	[5, 5],
	[6, 4],
	[7, 3],
	[8, 2],
	[9, 1],
];

module.exports = makeBenchmark(
	"unzip",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.unzip(input);
			},
			() => {
				return pipe(input, A.unzip);
			},
		];
	}),
	// addRemeda(remeda => {
	//   const { pipe, unzip } = remeda

	//   return [
	//     () => {
	//       return unzip(input)
	//     },
	//     () => {
	//       return pipe(input, unzip)
	//     },
	//   ]
	// }),
	addRamda((ramda) => {
		const { pipe, transpose: unzip } = ramda;

		return [
			() => {
				return unzip(input);
			},
			() => {
				return pipe(unzip)(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, transpose: unzip } = rambda;

		return [
			() => {
				return unzip(input);
			},
			() => {
				return pipe(unzip)(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.unzip(input);
			},
			() => {
				return _.pipe(_.unzip)(input);
			},
		];
	}),
);
