import { expectType } from "ts-expect";
import { A, R, pipe } from "../..";

describe("handleError", () => {
	it("provides correct types", () => {
		expectType<R.Result<string, void>>(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.handleError((_) => "string"),
			),
		);
	});

	it("handles error", () => {
		expect(
			pipe(
				R.fromNullable([1, 2, 3], "this is bad"),
				R.handleError((_) => A.makeEmpty<number>()),
			),
		).toEqual(R.Ok([1, 2, 3]));

		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.handleError((_) => "string"),
			),
		).toEqual(R.Ok("string"));
	});

	it("*", () => {
		const { Ok } = R;

		let obj: { name: string; age: number } | null = {
			name: "Joe",
			age: 20,
		};

		expect(
			// type User = { name: string, age: number } | null
			pipe(
				// ⬇️ const obj: User = { name: 'Joe', age: 20 }
				R.fromNullable(obj, "unknown"),
				R.handleError((err) => {
					return {
						name: err,
						age: 0,
					};
				}),
				R.map((obj) => obj.name),
			),
		).toEqual(Ok("Joe"));

		obj = null as unknown as { name: string; age: number } | null;

		expect(
			pipe(
				// ⬇️ const obj: User = null
				R.fromNullable(obj, "unknown"),
				R.handleError((err) => {
					return {
						name: err,
						age: 0,
					};
				}),
				R.map((obj) => obj.name),
			),
		).toEqual(Ok("unknown"));
	});
});
