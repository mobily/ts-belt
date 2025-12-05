import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("isEmpty", () => {
	it("provides correct types", () => {
		expectType<boolean>(A.isEmpty([1, 2, 3]));
	});

	it("returns `true` if the given array is empty", () => {
		expect(A.isEmpty([])).toEqual(true);
	});

	it("returns `false` if the given array is not empty", () => {
		expect(A.isEmpty([1, 2, 3])).toEqual(false);
	});

	it("*", () => {
		expect(A.isEmpty(["hello", "world"])).toEqual(false);
		expect(A.isEmpty([])).toEqual(true);
	});
});

describe("isEmpty (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe([1, 2, 3], A.isEmpty));
	});

	it("returns `true` if the given array is empty", () => {
		expect(pipe([], A.isEmpty)).toEqual(true);
	});

	it("returns `false` if the given array is not empty", () => {
		expect(pipe([1, 2, 3], A.isEmpty)).toEqual(false);
	});

	it("*", () => {
		expect(pipe([1, 2, 3], A.isEmpty)).toEqual(false);
	});
});
