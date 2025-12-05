import { A, pipe } from "../..";

const xs = [1, 2, 3, 4, 5, 6, 7];

// TODO: expectType
describe("takeWhile", () => {
	it("returns a new array, filled with elements from the provided array until an element does not pass the provided predicate", () => {
		expect(A.takeWhile(xs, (x) => x < 4)).toEqual([1, 2, 3]);
		expect(A.takeWhile([3, 5, 3], (x) => x < 4)).toEqual([3]);
	});

	it("returns correct array elements if either true or false", () => {
		expect(A.takeWhile(xs, (_x) => true)).toEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(A.takeWhile(xs, (_x) => false)).toEqual([]);
	});
});

describe("takeWhile (pipe)", () => {
	it("returns a new array, filled with elements from the provided array until an element does not pass the provided predicate", () => {
		const result = pipe(
			xs,
			A.takeWhile((x) => x < 4),
		);
		expect(result).toEqual([1, 2, 3]);
	});
});
