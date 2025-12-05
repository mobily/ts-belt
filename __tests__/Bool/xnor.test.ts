import { expectType } from "ts-expect";

import { B, pipe } from "../..";

describe("xnor", () => {
	it("provides correct types", () => {
		expectType<boolean>(B.xnor(true, true));
	});

	it("combines two booleans using XNOR", () => {
		expect(B.xnor(true, true)).toEqual(true);
		expect(B.xnor(false, false)).toEqual(true);
		expect(B.xnor(true, false)).toEqual(false);
	});

	it("*", () => {
		expect(B.xnor(true, false)).toEqual(false);
	});
});

describe("xnor (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(true, B.xnor(true)));
	});

	it("combines two booleans using XNOR", () => {
		expect(pipe(true, B.xnor(true))).toEqual(true);
		expect(pipe(false, B.xnor(false))).toEqual(true);
		expect(pipe(true, B.xnor(false))).toEqual(false);
	});

	it("*", () => {
		expect(pipe(false, B.xnor(false))).toEqual(true);
	});
});
