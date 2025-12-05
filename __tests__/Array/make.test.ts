import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("make", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(A.make(3, 3));
		expectType<ReadonlyArray<string>>(A.make(3, "hello"));
	});

	it("creates an empty array", () => {
		const result = A.make(-1, "hello");
		expect(result).toEqual([]);
	});

	it("creates a new array of size `n`", () => {
		const result = A.make(3, 1);
		expect(result).toEqual([1, 1, 1]);
	});

	it("*", () => {
		expect(A.make(-1, "hello")).toEqual([]);
		expect(A.make(3, 1)).toEqual([1, 1, 1]);
	});
});

describe("make (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<string>>(pipe(2, A.make("hello")));
		expectType<ReadonlyArray<number>>(pipe(2, A.make(5)));
	});

	it("creates an empty array", () => {
		const result = pipe(-1, A.make("hello"));
		expect(result).toEqual([]);
	});

	it("creates a new array of size `n`", () => {
		const result = pipe(3, A.make(1));
		expect(result).toEqual([1, 1, 1]);
	});

	it("*", () => {
		expect(pipe(2, A.make("hello"))).toEqual(["hello", "hello"]);
	});
});
