import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("modulo", () => {
	it("provides correct types", () => {
		expectType<number>(N.modulo(30, 6));
	});

	it("returns the remainder of a number division", () => {
		expect(N.modulo(20, 4)).toEqual(0);
	});

	it("*", () => {
		expect(N.modulo(20, 6)).toEqual(2);
	});
});

describe("modulo (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(30, N.modulo(6)));
	});

	it("returns the remainder of a number division", () => {
		expect(pipe(20, N.modulo(2))).toEqual(0);
	});

	it("*", () => {
		expect(pipe(30, N.modulo(4))).toEqual(2);
	});
});
