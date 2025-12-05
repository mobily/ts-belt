const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
} = require("../utils");

const input = [1, 2, 2, 3, 3, 5, 4, 3, 2, 1];
const fn = (x) => x;

module.exports = makeBenchmark(
	"uniq",
	addTsBelt((tsBelt) => {
		const { A, pipe } = tsBelt;

		return [
			() => {
				return A.uniq(input);
			},
			() => {
				return pipe(input, A.uniq);
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, uniq } = remeda;

		return [
			() => {
				return uniq(input);
			},
			() => {
				return pipe(input, uniq());
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, uniq } = ramda;

		return [
			() => {
				return uniq(input);
			},
			() => {
				return pipe(uniq)(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, uniq } = rambda;

		return [
			() => {
				return uniq(input);
			},
			() => {
				return pipe(uniq)(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.uniq(input);
			},
			() => {
				return _.pipe(_.uniq)(input);
			},
		];
	}),
);
