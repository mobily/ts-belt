import { expectType } from "ts-expect";
import { A, R, pipe } from "../..";

describe("catchError", () => {
	it("provides correct types", () => {
		expectType<R.Result<string, string>>(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.catchError((_) => R.Ok("string")),
			),
		);

		expectType<R.Result<string, number>>(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.catchError((_) => R.Error(0)),
			),
		);
	});

	it("catches error", () => {
		expect(
			pipe(
				R.fromNullable([1, 2, 3], "this is bad"),
				R.catchError((_) => R.Ok(A.makeEmpty<number>())),
			),
		).toEqual(R.Ok([1, 2, 3]));

		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.catchError((_) => R.Ok("string")),
			),
		).toEqual(R.Ok("string"));
	});

	it("*", () => {
		const { Ok, Error } = R;

		let obj: { name: string; age: number } | null = {
			name: "Joe",
			age: 20,
		};

		expect(
			// type User = { name: string, age: number } | null
			pipe(
				// ⬇️ const obj: User = { name: 'Joe', age: 20 }
				R.fromNullable(obj, "unknown"),
				R.catchError((err) => {
					return R.Ok({
						name: err,
						age: 0,
					});
				}),
				R.map((obj) => obj.name),
			),
		).toEqual(Ok("Joe"));

		obj = null as unknown as { name: string; age: number } | null;

		expect(
			pipe(
				// ⬇️ const obj: User = null
				R.fromNullable(obj, "unknown"),
				R.catchError((err) => {
					return R.Error(`${err} value`);
				}),
				R.map((obj) => obj.name),
			),
		).toEqual(Error("unknown value"));
	});
});
