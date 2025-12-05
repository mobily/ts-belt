import { expectType } from "ts-expect";

import { B, pipe } from "../..";

describe("xor", () => {
	it("provides correct types", () => {
		expectType<boolean>(B.xor(true, true));
	});

	it("combines two booleans using XOR", () => {
		expect(B.xor(true, true)).toEqual(false);
		expect(B.xor(false, false)).toEqual(false);
		expect(B.xor(true, false)).toEqual(true);
	});

	it("*", () => {
		expect(B.xor(true, false)).toEqual(true);
	});
});

describe("xor (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(true, B.xor(true)));
	});

	it("combines two booleans using XOR", () => {
		expect(pipe(true, B.xor(true))).toEqual(false);
		expect(pipe(false, B.xor(false))).toEqual(false);
		expect(pipe(true, B.xor(false))).toEqual(true);
	});

	it("*", () => {
		expect(pipe(false, B.xor(false))).toEqual(false);
	});
});
