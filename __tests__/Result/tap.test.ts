import { R, S, pipe } from "../..";

describe("tap", () => {
	it("applies a side-effect", () => {
		const spy = jest.fn();
		const value = pipe(
			R.fromNullable("hello", "value cannot be nullable"),
			R.map(S.isEmpty),
			R.tap((isEmpty) => {
				spy();
				expect(isEmpty).toEqual(false);
			}),
			R.getWithDefault(false),
		);

		expect(spy).toBeCalledTimes(1);
		expect(value).toEqual(false);
	});

	it("*", () => {
		expect(
			pipe(
				R.fromNullable("hello", "value cannot be nullable"),
				R.map(S.isEmpty),
				R.tap((isEmpty) => {
					console.log(isEmpty); // ⬅️ false
				}),
				R.getWithDefault(false),
			),
		).toEqual(false);
	});
});
