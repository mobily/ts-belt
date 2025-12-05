import { A, O } from "../..";

describe("getBy", () => {
	it("returns None", () => {
		expect(A.getBy([1, 2, 3], (n) => n === 0)).toEqual(O.None);
		expect(A.getBy([false, false, false], (state) => state)).toEqual(O.None);
		expect(
			A.getBy([{ prop: null }, { prop: false }, { prop: undefined }], (obj) =>
				Boolean(obj.prop),
			),
		).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(A.getBy(["a", "ab", "bc"], (str) => str.length === 2)).toEqual(
			O.Some("ab"),
		);
		expect(A.getBy([1, 2, 3], (value) => value === 2)).toEqual(O.Some(2));
		expect(
			A.getBy(
				[{ prop: "ab" }, { prop: "abc" }, { prop: "bcd" }],
				(obj) => obj.prop.length > 2,
			),
		).toEqual(O.Some({ prop: "abc" }));
	});
});
