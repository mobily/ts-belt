import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("drop", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(A.drop([1, 2, 3], 4));
		expectType<ReadonlyArray<boolean>>(A.drop([true, true, false], 4));
	});

	it("returns the same values as the provided array", () => {
		expect(A.drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
	});

	it("returns an empty array", () => {
		expect(A.drop([], 0)).toEqual([]);
		expect(A.drop([1, 2, 3], 4)).toEqual([]);
		expect(A.drop([1, 2, 3], 3)).toEqual([]);
		expect(A.drop([1], 1)).toEqual([]);
	});

	it("returns a new array that does not contain the first `n` items", () => {
		expect(A.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
		expect(A.drop([1, 2, 3], 1)).toEqual([2, 3]);
		expect(A.drop([[1], [2]], 1)).toEqual([[2]]);
		expect(A.drop([true, true, false], 2)).toEqual([false]);
	});

	it("*", () => {
		expect(A.drop([1], 1)).toEqual([]);
		expect(A.drop([1, 2, 3], 4)).toEqual([]);
		expect(A.drop([1, 2, 3], 2)).toEqual([3]);
	});
});

describe("drop (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(pipe([1, 2, 3], A.drop(4)));
		expectType<ReadonlyArray<boolean>>(pipe([true, true, false], A.drop(4)));
	});

	it("returns the same values as the provided array", () => {
		expect(pipe([1, 2, 3], A.drop(-1))).toEqual([1, 2, 3]);
	});

	it("returns an empty array", () => {
		expect(pipe([], A.drop(0))).toEqual([]);
		expect(pipe([1, 2, 3], A.drop(4))).toEqual([]);
		expect(pipe([1, 2, 3], A.drop(3))).toEqual([]);
		expect(pipe([1], A.drop(1))).toEqual([]);
	});

	it("returns a new array that does not contain the first `n` items", () => {
		expect(pipe([1, 2, 3], A.drop(0))).toEqual([1, 2, 3]);
		expect(pipe([1, 2, 3], A.drop(1))).toEqual([2, 3]);
		expect(pipe([[1], [2]], A.drop(1))).toEqual([[2]]);
		expect(pipe([true, true, false], A.drop(2))).toEqual([false]);
	});

	it("*", () => {
		expect(pipe([1, 2, 3, 4], A.drop(2))).toEqual([3, 4]);
	});
});
