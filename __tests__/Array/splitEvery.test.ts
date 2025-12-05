import { A, pipe } from "../..";

const xs = [1, 2, 3, 4, 5, 6, 7];

// TODO: expectType
describe("splitEvery", () => {
	it("returns an array of arrays, where each of the inner arrays has length equal to `n`", () => {
		const result = A.splitEvery(xs, 3);
		expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
	});

	it("returns the original array inside a new array if n is out of range", () => {
		expect(A.splitEvery(xs, 0)).toEqual([[1, 2, 3, 4, 5, 6, 7]]);
		expect(A.splitEvery(xs, 8)).toEqual([[1, 2, 3, 4, 5, 6, 7]]);
	});
});

describe("splitEvery (pipe)", () => {
	it("returns an array of arrays, where each of the inner arrays has length equal to `n`", () => {
		const result = pipe(xs, A.splitEvery(3));
		expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
	});
});
