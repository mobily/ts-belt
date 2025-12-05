import { expectType } from "ts-expect";
import { A, R, pipe } from "../..";

describe("recover", () => {
	it("provides correct types", () => {
		expectType<R.Result<string, string>>(
			pipe(R.fromNullable(null, "this is bad"), R.recover("string")),
		);
	});

	it("recovers result value", () => {
		expect(
			pipe(
				R.fromNullable([1, 2, 3], "this is bad"),
				R.recover(A.makeEmpty<number>()),
			),
		).toEqual(R.Ok([1, 2, 3]));

		expect(
			pipe(R.fromNullable(null, "this is bad"), R.recover("string")),
		).toEqual(R.Ok("string"));
	});

	it("*", () => {
		const { Ok } = R;

		let obj: { name: string | null; age: number } | null = {
			name: "Joe",
			age: 20,
		};

		expect(
			// type User = { name: string | null, age: number } | null
			pipe(
				// ⬇️ const obj: User = { name: 'Joe', age: 20 }
				R.fromNullable(obj, "value cannot be nullable"),
				R.flatMap((obj) => {
					return obj.name ? R.Ok(obj.name) : R.Error("name not found");
				}),
				R.recover("unknown name"),
			),
		).toEqual(Ok("Joe"));

		obj = { name: null, age: 20 };

		expect(
			pipe(
				// ⬇️ const obj: User = { name: null, age: 20 }
				R.fromNullable(obj, "value cannot be nullable"),
				R.flatMap((obj) => {
					return obj.name ? R.Ok(obj.name) : R.Error("name not found");
				}),
				R.recover("unknown name"),
			),
		).toEqual(Ok("unknown name"));
	});
});
