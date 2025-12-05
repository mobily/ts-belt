import { R, pipe } from "../..";

describe("isOk", () => {
	it("returns true", () => {
		expect(R.isOk(R.Ok("this is fine"))).toBeTruthy();
		expect(pipe(R.fromNullable("value", "this is bad"), R.isOk)).toBeTruthy();
	});

	it("returns false", () => {
		expect(R.isOk(R.Error("this is bad"))).toBeFalsy();
		expect(pipe(R.fromNullable(null, "this is bad"), R.isOk)).toBeFalsy();
	});

	it("*", () => {
		expect(R.isOk(R.Ok("good"))).toEqual(true);
		expect(pipe(R.fromNullable(4, "error"), R.isOk)).toEqual(true);
		expect(R.isOk(R.Error("bad"))).toEqual(false);
		expect(pipe(R.fromNullable(null, "error"), R.isOk)).toEqual(false);
	});
});
