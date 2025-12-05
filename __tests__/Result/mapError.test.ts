import { expectType } from "ts-expect";
import { A, R, pipe } from "../..";

describe("mapError", () => {
	it("provides correct types", () => {
		expectType<R.Result<string, number>>(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.mapError((_) => 1),
			),
		);
	});

	it("maps error", () => {
		expect(
			pipe(
				R.fromNullable([1, 2, 3], "this is bad"),
				R.mapError((_) => A.makeEmpty<number>()),
			),
		).toEqual(R.Ok([1, 2, 3]));

		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.mapError((error) => `Error: ${error}`),
			),
		).toEqual(R.Error("Error: this is bad"));
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
				R.mapError((err) => {
					return `${err} value`;
				}),
				R.map((obj) => obj.name),
			),
		).toEqual(Ok("Joe"));

		obj = null as unknown as { name: string; age: number } | null;

		expect(
			pipe(
				// ⬇️ const obj: User = null
				R.fromNullable(obj, "unknown"),
				R.mapError((err) => {
					return `${err} value`;
				}),
				R.map((obj) => obj.name),
			),
		).toEqual(Error("unknown value"));
	});
});
