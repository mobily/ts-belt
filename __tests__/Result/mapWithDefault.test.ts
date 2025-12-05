import { R, pipe } from "../..";

describe("mapWithDefault", () => {
	it("returns a default value", () => {
		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.mapWithDefault("default value", (_) => "value"),
			),
		).toEqual("default value");
	});

	it("should skip a default value", () => {
		expect(
			pipe(
				R.fromNullable("hello", "this is bad"),
				R.mapWithDefault("default", (str) => {
					return `${str} world`;
				}),
			),
		).toEqual("hello world");
	});

	it("*", () => {
		let name: string | null = "Joe";

		expect(
			// type Name = string | null
			pipe(
				// ⬇️ const name: Name = 'Joe'
				R.fromNullable(name, "cannot be nullable"),
				R.mapWithDefault("Hello, stranger!", (name) => `Hello, ${name}!`),
			),
		).toEqual("Hello, Joe!");

		name = null as unknown as string | null;

		expect(
			pipe(
				// ⬇️ const name: Name = null
				R.fromNullable(name, "cannot be nullable"),
				R.mapWithDefault("Hello, stranger!", (name) => `Hello, ${name}!`),
			),
		).toEqual("Hello, stranger!");
	});
});
