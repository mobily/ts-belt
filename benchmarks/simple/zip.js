const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const xs = [9, 8, 7, 6, 5, 4, 3, 2, 1];

module.exports = makeBenchmark(
	"zip",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.zip(input, xs);
			},
			() => {
				return pipe(input, A.zip(xs));
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, zip } = remeda;

		return [
			() => {
				return zip(input, xs);
			},
			() => {
				return pipe(input, zip(xs));
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, zip } = ramda;

		return [
			() => {
				return zip(input, xs);
			},
			() => {
				return pipe(zip(input))(xs);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, zip } = rambda;

		return [
			() => {
				return zip(input, xs);
			},
			() => {
				return pipe(zip(input))(xs);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.zip(input, xs);
			},
			() => {
				return _.pipe(_.zip(input))(xs);
			},
		];
	}),
);
