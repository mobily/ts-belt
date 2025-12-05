import { expectType } from "ts-expect";
import { R, pipe } from "../..";

describe("flip", () => {
	it("provides correct types", () => {
		expectType<R.Result<string, number>>(
			pipe(R.fromNullable(0, "this is bad"), R.flip),
		);
	});

	it("returns Ok", () => {
		expect(pipe(R.fromNullable(null, "this is bad"), R.flip)).toEqual(
			R.Ok("this is bad"),
		);
	});

	it("returns Error", () => {
		expect(pipe(R.fromNullable([1, 2, 3], "this is bad"), R.flip)).toEqual(
			R.Error([1, 2, 3]),
		);
	});

	it("*", () => {
		const { Ok, Error } = R;

		let value: string | null = "Joe";

		expect(
			// type Value = string | null
			pipe(
				// ⬇️ const value: Value = 'Joe'
				R.fromNullable(value, "value cannot be nullable"),
				R.flip,
			),
		).toEqual(Error("Joe"));

		value = null;

		expect(
			// type Value = string | null
			pipe(
				// ⬇️ const value: Value = null
				R.fromNullable(value, "value cannot be nullable"),
				R.flip,
			),
		).toEqual(Ok("value cannot be nullable"));
	});
});
