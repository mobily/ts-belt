import { A, O, R, pipe } from "../..";

describe("toUndefined", () => {
	it("returns null", () => {
		expect(pipe(R.Error("this is bad"), R.toUndefined)).toEqual(undefined);
		expect(
			pipe(
				R.fromNullable("value", "this is bad"),
				R.flatMap((_) => R.Error("new error")),
				R.toUndefined,
			),
		).toEqual(undefined);
		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.flatMap((_) => R.Ok("this is fine")),
				R.toUndefined,
			),
		).toEqual(undefined);
	});

	it("returns a value", () => {
		expect(pipe(R.Ok("value"), R.toUndefined)).toEqual("value");
		expect(pipe(R.fromNullable("value", "this is bad"), R.toUndefined)).toEqual(
			"value",
		);
		expect(
			pipe(
				R.fromNullable("this is fine", "this is bad"),
				R.flatMap((str) => R.Ok(`${str}!`)),
				R.toUndefined,
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
				R.toUndefined,
			),
		).toEqual("ts-belt");
		expect(
			pipe(
				R.fromNullable([], "cannot be nullable"),
				R.flatMap((xs) => {
					return pipe(xs, A.dropExactly(2), O.toResult("array is empty"));
				}),
				R.map(A.join("-")),
				R.toUndefined,
			),
		).toEqual(undefined);
	});
});
