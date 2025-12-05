import { A, pipe } from "../..";

const xs = [1, 2, 3, 4, 5];

// TODO: expectTypes
describe("intersperse", () => {
	it("happy", () => {
		const result = A.intersperse(xs, 0);
		expect(result).toEqual([1, 0, 2, 0, 3, 0, 4, 0, 5]);
	});
});

describe("intersperse (pipe)", () => {
	it("happy", () => {
		const result = pipe(xs, A.intersperse(0));
		expect(result).toEqual([1, 0, 2, 0, 3, 0, 4, 0, 5]);
	});
});
