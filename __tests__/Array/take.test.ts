import { A } from "../..";

describe("take", () => {
	it("returns an empty array", () => {
		expect(A.take([1, 2, 3], -1)).toEqual([]);
		expect(A.take([], 0)).toEqual([]);
		expect(A.take([1, 2, 3], 0)).toEqual([]);
	});

	it("returns a new array including the first `n` items", () => {
		expect(A.take([1], 1)).toEqual([1]);
		expect(A.take([1, 2, 3], 1)).toEqual([1]);
		expect(A.take([[1], [2]], 1)).toEqual([[1]]);
		expect(A.take([true, true, false], 2)).toEqual([true, true]);
		expect(A.take([1, 2, 3], 3)).toEqual([1, 2, 3]);
		expect(A.take([1, 2, 3], 4)).toEqual([1, 2, 3]);
	});
});
