import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("multiply", () => {
	it("provides correct types", () => {
		expectType<number>(N.multiply(2, 2));
	});

	it("multiplies two numbers", () => {
		expect(N.multiply(2, 4)).toEqual(8);
	});

	it("*", () => {
		expect(N.multiply(3, 6)).toEqual(18);
	});
});

describe("multiply (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(3, N.multiply(6)));
	});

	it("multiplies two numbers", () => {
		expect(pipe(2, N.multiply(2))).toEqual(4);
	});

	it("*", () => {
		expect(pipe(8, N.multiply(4))).toEqual(32);
	});
});
