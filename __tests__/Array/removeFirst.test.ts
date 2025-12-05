import { expectType } from "ts-expect";

import { A, pipe } from "../..";

const xs = [1, 2, 1, 3];

describe("removeFirst", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(A.removeFirst(xs, 1));
	});

	it("removes the first occurence of the given value", () => {
		expect(A.removeFirst(xs, 1)).toEqual([2, 1, 3]);
	});

	it("*", () => {
		expect(A.removeFirst(["hello", "hello", "world"], "hello")).toEqual(
			// prettier-ignore
			["hello", "world"],
		);
	});
});

describe("removeFirst (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(pipe(xs, A.removeFirst(1)));
	});

	it("removes the first occurence of the given value", () => {
		expect(pipe(xs, A.removeFirst(1))).toEqual([2, 1, 3]);
	});

	it("*", () => {
		expect(pipe([4, 5, 2, 1, 3], A.removeFirst(1))).toEqual([4, 5, 2, 3]);
	});
});
