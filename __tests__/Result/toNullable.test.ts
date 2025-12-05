import { A, O, R, pipe } from "../..";

describe("toNullable", () => {
	it("returns null", () => {
		expect(pipe(R.Error("this is bad"), R.toNullable)).toBe(null);
		expect(
			pipe(
				R.fromNullable("value", "this is bad"),
				R.flatMap((_) => R.Error("new error")),
				R.toNullable,
			),
		).toEqual(null);
		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.flatMap((_) => R.Ok("this is fine")),
				R.toNullable,
			),
		).toEqual(null);
	});

	it("returns a value", () => {
		expect(pipe(R.Ok("value"), R.toNullable)).toEqual("value");
		expect(pipe(R.fromNullable("value", "this is bad"), R.toNullable)).toEqual(
			"value",
		);
		expect(
			pipe(
				R.fromNullable("this is fine", "this is bad"),
				R.flatMap((str) => R.Ok(`${str}!`)),
				R.toNullable,
			),
		).toEqual("this is fine!");
	});

	it("*", () => {
		expect(
			pipe(
				R.fromNullable(["hello", "world", "ts", "belt"], "cannot be nullable"),
				R.flatMap((xs) => {
					return pipe(xs, A.dropExactly(2), O.toResult("array is empty"));
				}),
				R.map(A.join("-")),
				R.toNullable,
			),
		).toEqual("ts-belt");
		expect(
			pipe(
				R.fromNullable([], "cannot be nullable"),
				R.flatMap((xs) => {
					return pipe(xs, A.dropExactly(2), O.toResult("array is empty"));
				}),
				R.map(A.join("-")),
				R.toNullable,
			),
		).toEqual(null);
	});
});
