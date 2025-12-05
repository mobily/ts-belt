import { R, pipe } from "../..";

describe("getExn", () => {
	it("should throw an error", () => {
		expect(() => {
			pipe(R.fromNullable(null, "this is bad"), R.getExn);
		}).toThrow(Object);
	});

	it("returns a value", () => {
		expect(pipe(R.fromNullable("value", "this is bad"), R.getExn)).toEqual(
			"value",
		);
	});

	it("*", () => {
		expect(
			pipe(
				R.fromNullable("hello", "oops!"),
				R.map((value) => `${value} world!`),
				R.getExn,
			),
		).toEqual("hello world!");
	});
});
