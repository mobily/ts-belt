import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("length", () => {
	it("provides correct types", () => {
		expectType<number>(A.length([1, 2, 3, 4, 5]));
	});

	it("returns the correct size of the given array", () => {
		expect(A.length([1, 2, 3, 4, 5])).toEqual(5);
		expect(A.length([])).toEqual(0);
	});

	it("*", () => {
		expect(A.length(["hello", "world"])).toEqual(2);
	});
});

describe("length (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe([1, 2, 3], A.length));
	});

	it("returns the correct size of the given array", () => {
		expect(pipe([1, 2, 3], A.length)).toEqual(3);
		expect(pipe([], A.length)).toEqual(0);
	});

	it("*", () => {
		expect(pipe([0, 2, 4], A.length)).toEqual(3);
	});
});
