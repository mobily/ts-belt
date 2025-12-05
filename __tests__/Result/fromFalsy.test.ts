import { R } from "../..";

describe("fromFalsy", () => {
	it("returns Error", () => {
		expect(R.fromFalsy(null, "this is bad")).toEqual(R.Error("this is bad"));
		expect(R.fromFalsy(undefined, "this is bad")).toEqual(
			R.Error("this is bad"),
		);
		expect(R.fromFalsy(0, "this is bad")).toEqual(R.Error("this is bad"));
		expect(R.fromFalsy("", "this is bad")).toEqual(R.Error("this is bad"));
		expect(R.fromFalsy(false, "this is bad")).toEqual(R.Error("this is bad"));
	});

	it("returns Ok", () => {
		expect(R.fromFalsy("value", "this is bad")).toEqual(R.Ok("value"));
		expect(R.fromFalsy([], "this is bad")).toEqual(R.Ok([]));
		expect(R.fromFalsy({}, "this is bad")).toEqual(R.Ok({}));
	});

	it("*", () => {
		const { Ok, Error } = R;
		expect(R.fromFalsy(4, "falsy")).toEqual(Ok(4));
		expect(R.fromFalsy([], "falsy")).toEqual(Ok([]));
		expect(R.fromFalsy({}, "falsy")).toEqual(Ok({}));
		expect(R.fromFalsy(0, "falsy")).toEqual(Error("falsy"));
		expect(R.fromFalsy("", "falsy")).toEqual(Error("falsy"));
		expect(R.fromFalsy(false, "falsy")).toEqual(Error("falsy"));
	});
});
