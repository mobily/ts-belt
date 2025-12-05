import { A, O, pipe } from "../..";

describe("tail", () => {
	it("returns None", () => {
		expect(A.tail([])).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(A.tail([1, 2, 3])).toEqual(O.Some([2, 3]));
		expect(A.tail([true, true, false])).toEqual(O.Some([true, false]));
		expect(A.tail([{ prop: 1 }, { prop: 2 }])).toEqual(O.Some([{ prop: 2 }]));
		expect(A.tail([[1], [2], [3]])).toEqual(O.Some([[2], [3]]));
	});

	it("*", () => {
		const { Some, None } = O;

		expect(A.tail([1, 2, 3])).toEqual(Some([2, 3]));
		expect(A.tail([1])).toEqual(Some([]));
		expect(A.tail([])).toEqual(None);
		expect(pipe([1, 2, 3, 4], A.tail)).toEqual(Some([2, 3, 4]));
	});
});
