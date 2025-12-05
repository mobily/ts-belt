import { A, R } from "../..";

describe("fromPredicate", () => {
	it("returns Error", () => {
		expect(
			R.fromPredicate("value", (str) => str.length > 10, "this is bad"),
		).toEqual(R.Error("this is bad"));
		expect(R.fromPredicate(0, (n) => n !== 0, "this is bad")).toEqual(
			R.Error("this is bad"),
		);
		expect(R.fromPredicate(true, (state) => !state, "this is bad")).toEqual(
			R.Error("this is bad"),
		);
	});

	it("returns Ok", () => {
		expect(
			R.fromPredicate(
				[1, 2, 3],
				A.some((x) => x === 2),
				"this is bad",
			),
		).toEqual(R.Ok([1, 2, 3]));
		expect(
			R.fromPredicate(
				{ prop: "this is fine" },
				(obj) => obj.prop === "this is fine",
				"this is bad",
			),
		).toEqual(R.Ok({ prop: "this is fine" }));
	});

	it("*", () => {
		const { Ok, Error } = R;

		expect(
			R.fromPredicate(
				[1, 2, 3],
				A.some((x) => x === 2),
				"value not found",
			),
		).toEqual(Ok([1, 2, 3]));

		expect(
			R.fromPredicate(
				[1, 2, 3],
				A.some((x) => x === 4),
				"value not found",
			),
		).toEqual(Error("value not found"));
	});
});
