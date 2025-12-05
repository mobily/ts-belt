import { A, F, N, pipe } from "../..";

describe("tap", () => {
	it("applies a side-effect", () => {
		const spy = jest.fn();

		A.forEach([1, 2, 3], F.tap(spy));

		expect(spy).toBeCalledTimes(3);
	});

	it("*", () => {
		expect(
			pipe(
				A.makeWithIndex(3, N.succ),
				F.tap((xs) => console.log(xs)),
				A.map((value) => value * 2),
			),
		).toEqual([2, 4, 6]);
	});
});
