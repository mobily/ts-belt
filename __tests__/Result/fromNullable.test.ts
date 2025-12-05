import { R } from "../..";

describe("fromNullable", () => {
	it("returns Error", () => {
		expect(R.fromNullable(null, "this is bad")).toEqual(R.Error("this is bad"));
		expect(R.fromNullable(undefined, "this is bad")).toEqual(
			R.Error("this is bad"),
		);
	});

	it("returns Ok", () => {
		expect(R.fromNullable("value", "this is bad")).toEqual(R.Ok("value"));
		expect(R.fromNullable([], "this is bad")).toEqual(R.Ok([]));
		expect(R.fromNullable({}, "this is bad")).toEqual(R.Ok({}));
		expect(R.fromNullable(0, "this is bad")).toEqual(R.Ok(0));
		expect(R.fromNullable(1, "this is bad")).toEqual(R.Ok(1));
		expect(R.fromNullable(false, "this is bad")).toEqual(R.Ok(false));
		expect(R.fromNullable(true, "this is bad")).toEqual(R.Ok(true));
	});

	it("*", () => {
		const { Ok, Error } = R;

		expect(R.fromNullable(null, "nullable")).toEqual(Error("nullable"));
		expect(R.fromNullable(undefined, "nullable")).toEqual(Error("nullable"));
		expect(R.fromNullable([], "nullable")).toEqual(Ok([]));
		expect(R.fromNullable({}, "nullable")).toEqual(Ok({}));
		expect(R.fromNullable(0, "nullable")).toEqual(Ok(0));
		expect(R.fromNullable(1, "nullable")).toEqual(Ok(1));
		expect(R.fromNullable(false, "nullable")).toEqual(Ok(false));
	});
});
