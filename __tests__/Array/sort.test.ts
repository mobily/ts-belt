import { A, pipe } from "../..";

const xs = [9, 2, 6, 4, 8, 5, 1, 7, 3];

// TODO: expectType
describe("sort", () => {
	it("returns correctly sorted array", () => {
		const result = A.sort(xs, (a, b) => a - b);
		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});
});

describe("sort (pipe)", () => {
	it("returns correctly sorted array", () => {
		const result = pipe(
			xs,
			A.sort((a, b) => a - b),
		);
		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});
});
