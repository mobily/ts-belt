import { expectType } from "ts-expect";

import { A, N, pipe } from "../..";

describe("succ", () => {
	it("provides correct types", () => {
		expectType<number>(N.succ(2));
	});

	it("adds 1 to the given number", () => {
		expect(N.succ(4)).toEqual(5);
	});

	it("*", () => {
		expect(N.succ(0)).toEqual(1);
		expect(A.makeWithIndex(4, N.succ)).toEqual([1, 2, 3, 4]);
	});
});

describe("succ (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(3, N.succ));
	});

	it("adds 1 to the given number", () => {
		expect(pipe(2, N.succ)).toEqual(3);
	});

	it("*", () => {
		expect(pipe(5, N.succ)).toEqual(6);
	});
});
