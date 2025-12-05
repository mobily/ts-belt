const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
	addNative,
} = require("../utils");

const input = {
	lorem: "lorem",
	ipsum: 2,
	dolor: {
		hello: "world",
	},
	sit: [1, 2, 3],
};

module.exports = makeBenchmark(
	"toPairs",
	addTsBelt((tsBelt) => {
		const { D, pipe } = tsBelt;

		return [
			() => {
				return D.toPairs(input);
			},
			() => {
				return pipe(input, D.toPairs);
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, toPairs } = remeda;

		return [
			() => {
				return toPairs(input);
			},
			() => {
				return pipe(input, toPairs);
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, toPairs } = ramda;

		return [
			() => {
				return toPairs(input);
			},
			() => {
				return pipe(toPairs)(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, toPairs } = rambda;

		return [
			() => {
				return toPairs(input);
			},
			() => {
				return pipe(toPairs)(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.toPairs(input);
			},
			() => {
				return _.pipe(_.toPairs)(input);
			},
		];
	}),
	addNative((native) => {
		return [
			() => {
				return native.entries(input);
			},
			() => {
				return native.pipe(native.entries)(input);
			},
		];
	}),
);
