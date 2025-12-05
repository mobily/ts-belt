const {
	makeBenchmark,
	addTsBelt,
	addLodashFp,
	addRambda,
	addRamda,
	addRemeda,
	addNative,
} = require("../utils");

const input = [
	["lorem", "lorem"],
	["ipsum", 2],
	["dolor", { hello: "world" }],
	["sit", [1, 2, 3]],
];

module.exports = makeBenchmark(
	"fromPairs",
	addTsBelt((tsBelt) => {
		const { D, pipe } = tsBelt;

		return [
			() => {
				return D.fromPairs(input);
			},
			() => {
				return pipe(input, D.fromPairs);
			},
		];
	}),
	addRemeda((remeda) => {
		const { pipe, fromPairs } = remeda;

		return [
			() => {
				return fromPairs(input);
			},
			() => {
				return pipe(input, fromPairs);
			},
		];
	}),
	addRamda((ramda) => {
		const { pipe, fromPairs } = ramda;

		return [
			() => {
				return fromPairs(input);
			},
			() => {
				return pipe(fromPairs)(input);
			},
		];
	}),
	addRambda((rambda) => {
		const { pipe, fromPairs } = rambda;

		return [
			() => {
				return fromPairs(input);
			},
			() => {
				return pipe(fromPairs)(input);
			},
		];
	}),
	addLodashFp((_) => {
		return [
			() => {
				return _.fromPairs(input);
			},
			() => {
				return _.pipe(_.fromPairs)(input);
			},
		];
	}),
	addNative((native) => {
		return [
			() => {
				return native.fromEntries(input);
			},
			() => {
				return native.pipe(native.fromEntries)(input);
			},
		];
	}),
);
