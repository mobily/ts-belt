import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("subtract", () => {
	it("provides correct types", () => {
		expectType<number>(N.subtract(2, 1));
	});

	it("returns the difference of two numbers", () => {
		expect(N.subtract(20, 10)).toEqual(10);
	});

	it("*", () => {
		expect(N.subtract(20, 10)).toEqual(10);
	});
});

describe("subtract (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(2, N.subtract(1)));
	});

	it("returns the difference of two numbers", () => {
		expect(pipe(20, N.subtract(10))).toEqual(10);
	});

	it("*", () => {
		expect(pipe(15, N.subtract(10))).toEqual(5);
	});
});
