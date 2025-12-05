import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("divideWithModulo", () => {
	it("provides correct types", () => {
		expectType<readonly [number, number]>(N.divideWithModulo(4, 2));
	});

	it("returns the quotient and remainder of a number division", () => {
		expect(N.divideWithModulo(20, 10)).toEqual([2, 0]);
	});

	it("*", () => {
		expect(N.divideWithModulo(20, 5)).toEqual([4, 0]);
	});
});

describe("divideWithModulo (pipe)", () => {
	it("provides correct types", () => {
		expectType<readonly [number, number]>(pipe(4, N.divideWithModulo(2)));
	});

	it("returns the quotient and remainder of a number division", () => {
		expect(pipe(20, N.divideWithModulo(2))).toEqual([10, 0]);
	});

	it("*", () => {
		expect(pipe(30, N.divideWithModulo(4))).toEqual([7.5, 2]);
	});
});
