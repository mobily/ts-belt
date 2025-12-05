import { A, O } from "../..";

describe("head", () => {
	it("returns None", () => {
		expect(A.head([])).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(A.head([1, 2, 3])).toEqual(O.Some(1));
		expect(A.head([0, 2, 3])).toEqual(O.Some(0));
		expect(A.head([false, true, true])).toEqual(O.Some(false));
		expect(A.head([{ prop: 1 }, { prop: 2 }])).toEqual(O.Some({ prop: 1 }));
		expect(A.head([[1], [2]])).toEqual(O.Some([1]));
	});
});
