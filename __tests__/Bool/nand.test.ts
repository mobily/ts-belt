import { expectType } from "ts-expect";

import { B, pipe } from "../..";

describe("nand", () => {
	it("provides correct types", () => {
		expectType<boolean>(B.nand(true, true));
	});

	it("combines two booleans using NAND", () => {
		expect(B.nand(true, true)).toEqual(false);
		expect(B.nand(false, false)).toEqual(true);
		expect(B.nand(true, false)).toEqual(true);
	});

	it("*", () => {
		expect(B.nand(true, false)).toEqual(true);
	});
});

describe("nand (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(true, B.nand(true)));
	});

	it("combines two booleans using NAND", () => {
		expect(pipe(true, B.nand(true))).toEqual(false);
		expect(pipe(false, B.nand(false))).toEqual(true);
		expect(pipe(true, B.nand(false))).toEqual(true);
	});

	it("*", () => {
		expect(pipe(false, B.nand(false))).toEqual(true);
	});
});
