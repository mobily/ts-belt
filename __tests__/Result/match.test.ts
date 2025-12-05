import { A, R, pipe } from "../..";

describe("match", () => {
	it("returns a result of errorFn", () => {
		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.match(
					(_) => "this is fine",
					(error) => `${error}!`,
				),
			),
		).toEqual("this is bad!");
	});

	it("returns a result of okFn", () => {
		expect(
			pipe(
				R.fromNullable("this is fine", "this is bad"),
				R.match(
					(str) => `${str}!`,
					(error) => error,
				),
			),
		).toEqual("this is fine!");
	});

	it("*", () => {
		let xs: ReadonlyArray<string> | null = ["hello", "world"];

		expect(
			// type Elements = ReadonlyArray<string> | null
			pipe(
				// ⬇️ const xs: Elements = ['hello', 'world']
				R.fromNullable(xs, "cannot be nullable"),
				R.map(A.join(" ")),
				R.match(
					(str) => `${str}!`,
					() => "oops!",
				),
			),
		).toEqual("hello world!");

		xs = null as unknown as ReadonlyArray<string> | null;

		expect(
			pipe(
				// ⬇️ const xs: Elements = null
				R.fromNullable(xs, "cannot be nullable"),
				R.map(A.join(" ")),
				R.match(
					(str) => `${str}!`,
					(error) => `${error}!`,
				),
			),
		).toEqual("cannot be nullable!");
	});
});
