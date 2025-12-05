import { A, O } from "../..";

describe("splitAt", () => {
	it("returns None", () => {
		expect(A.splitAt([], 1)).toEqual(O.None);
		expect(A.splitAt([1, 2, 3], -1)).toEqual(O.None);
		expect(A.splitAt([1, 2, 3], 4)).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(A.splitAt([], 0)).toEqual(O.Some([[], []]));
		expect(A.splitAt([1], 1)).toEqual(O.Some([[1], []]));
		expect(A.splitAt([1, 2], 1)).toEqual(O.Some([[1], [2]]));
		expect(A.splitAt([true, true, false], 2)).toEqual(
			O.Some([[true, true], [false]]),
		);
		expect(A.splitAt([[1], [2], [3], [4]], 2)).toEqual(
			O.Some([
				[[1], [2]],
				[[3], [4]],
			]),
		);
	});
});
