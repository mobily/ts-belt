import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("isNotEmpty", () => {
	it("provides correct types", () => {
		expectType<boolean>(A.isNotEmpty([1, 2, 3]));
	});

	it("returns `true` if the given array is not empty", () => {
		expect(A.isNotEmpty([1, 2, 3])).toEqual(true);
	});

	it("returns `false` if the given array is empty", () => {
		expect(A.isNotEmpty([])).toEqual(false);
	});

	it("*", () => {
		expect(A.isNotEmpty(["hello", "world"])).toEqual(true);
		expect(A.isNotEmpty([])).toEqual(false);
	});
});

describe("isNotEmpty (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe([1, 2, 3], A.isNotEmpty));
	});

	it("returns `true` if the given array is not empty", () => {
		expect(pipe([1, 2, 3], A.isNotEmpty)).toEqual(true);
	});

	it("returns `false` if the given array is empty", () => {
		expect(pipe([], A.isNotEmpty)).toEqual(false);
	});

	it("*", () => {
		expect(pipe([1, 2, 3], A.isNotEmpty)).toEqual(true);
	});
});
