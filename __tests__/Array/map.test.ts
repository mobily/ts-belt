import { A, pipe } from "../..";

const xs = [1, 2, 3, 4, 5];

// TODO: expectType
describe("map", () => {
	it("returns correct value", () => {
		const result = A.map(xs, (value) => value * 2);
		expect(result).toEqual([2, 4, 6, 8, 10]);
	});
});

describe("map (pipe)", () => {
	it("returns correct value", () => {
		const result = pipe(
			xs,
			A.map((value) => value * 2),
		);

		expect(result).toEqual([2, 4, 6, 8, 10]);
	});
});
