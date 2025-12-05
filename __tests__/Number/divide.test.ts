import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("divide", () => {
	it("provides correct types", () => {
		expectType<number>(N.divide(1, 2));
	});

	it("divides two numbers", () => {
		expect(N.divide(20, 10)).toEqual(2);
	});

	it("*", () => {
		expect(N.divide(20, 5)).toEqual(4);
	});
});

describe("divide (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(1, N.divide(2)));
	});

	it("divides two numbers", () => {
		expect(pipe(20, N.divide(2))).toEqual(10);
	});

	it("*", () => {
		expect(pipe(40, N.divide(4))).toEqual(10);
	});
});
