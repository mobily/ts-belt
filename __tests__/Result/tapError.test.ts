import { R, pipe } from "../..";

describe("tapError", () => {
	it("applies a side-effect", () => {
		const spy = jest.fn();
		const value = pipe(
			R.fromNullable(null, "value cannot be nullable"),
			R.tapError((err) => {
				spy();
				expect(err).toEqual("value cannot be nullable");
			}),
			R.getWithDefault(false),
		);

		expect(spy).toBeCalledTimes(1);
		expect(value).toEqual(false);
	});

	it("*", () => {
		expect(
			pipe(
				R.fromNullable(null, "value cannot be nullable"),
				R.tapError((err) => {
					console.log(err); // ⬅️ 'value cannot be nullable'
				}),
				R.getWithDefault(false),
			),
		).toEqual(false);
	});
});
