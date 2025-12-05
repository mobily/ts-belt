import { expectType } from "ts-expect";

import { A, N, pipe } from "../..";

const xs = [1, 2, 1, 3];

describe("removeFirstBy", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(
			A.removeFirstBy(xs, 1, (x, y) => x === y),
		);
	});

	it("removes the first occurence of the given value", () => {
		expect(A.removeFirstBy(xs, 1, (x, y) => x === y)).toEqual([2, 1, 3]);
	});

	it("*", () => {
		expect(A.removeFirstBy([1, 2, 1, 3, 4], 2, N.gt)).toEqual([1, 2, 1, 4]);
	});
});

describe("removeFirstBy (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(
			pipe(
				xs,
				A.removeFirstBy(1, (x, y) => x === y),
			),
		);
	});

	it("removes the first occurence of the given value", () => {
		expect(
			pipe(
				xs,
				A.removeFirstBy(1, (x, y) => x === y),
			),
		).toEqual([2, 1, 3]);
	});

	it("*", () => {
		expect(
			pipe(
				["hello", "wrld", "world"],
				A.removeFirstBy(4, (str, length) => str.length === length),
			),
		).toEqual(["hello", "world"]);
	});
});
