import { R, pipe } from "../..";

describe("getWithDefault", () => {
	it("returns a default value", () => {
		expect(
			pipe(R.fromNullable(null, "error"), R.getWithDefault("default value")),
		).toEqual("default value");
	});

	it("should skip a default value", () => {
		expect(pipe(R.fromNullable(1, "error"), R.getWithDefault(2))).toEqual(1);
	});

	it("*", () => {
		expect(
			pipe(
				R.fromNullable("hello", "oops!"),
				R.map((value) => `${value} world!`),
				R.getWithDefault("error"),
			),
		).toBe("hello world!");

		expect(
			pipe(
				R.fromNullable(null, "oops!"),
				R.map((value) => `${value} world!`),
				R.getWithDefault("error"),
			),
		).toBe("error");
	});
});
