import { A, O, pipe } from "../..";

describe("tap", () => {
	it("applies a side-effect", () => {
		const spy = jest.fn();
		const value = pipe(
			O.fromNullable(["hello", "world"]),
			O.flatMap(A.head),
			O.tap((str) => {
				spy();
				expect(str).toEqual("hello");
			}),
			O.getWithDefault(""),
		);

		expect(spy).toBeCalledTimes(1);
		expect(value).toEqual("hello");
	});

	it("*", () => {
		expect(
			pipe(
				O.fromNullable(["hello", "world"]),
				O.flatMap(A.get(1)),
				O.tap((str) => {
					console.log(str); // ⬅️ 'world'
				}),
				O.getWithDefault(""),
			),
		).toEqual("world");
	});
});
