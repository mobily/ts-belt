import { expectType } from "ts-expect";

import { A, pipe } from "../..";

const xs = [1, 2, 3, 4, 5];

describe("reverse", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(A.reverse(xs));
		expectType<ReadonlyArray<string>>(A.reverse(["hello", "world"]));
	});

	it("returns the provided array in reverse order", () => {
		const result = A.reverse(xs);
		expect(result).toEqual([5, 4, 3, 2, 1]);
	});

	it("*", () => {
		expect(A.reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
	});
});

describe("make (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(pipe(xs, A.reverse));
		expectType<ReadonlyArray<string>>(pipe(["hello", "world"], A.reverse));
	});

	it("returns the provided array in reverse order", () => {
		const result = pipe(xs, A.reverse);
		expect(result).toEqual([5, 4, 3, 2, 1]);
	});

	it("*", () => {
		expect(pipe(["hello", "world"], A.reverse)).toEqual(["world", "hello"]);
	});
});
