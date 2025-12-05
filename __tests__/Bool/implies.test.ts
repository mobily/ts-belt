import { expectType } from "ts-expect";

import { B, pipe } from "../..";

describe("implies", () => {
	it("provides correct types", () => {
		expectType<boolean>(B.implies(true, true));
	});

	it("combines two booleans using an implication", () => {
		expect(B.implies(true, true)).toEqual(true);
		expect(B.implies(false, false)).toEqual(true);
		expect(B.implies(true, false)).toEqual(false);
	});

	it("*", () => {
		expect(B.implies(false, true)).toEqual(true);
	});
});

describe("implies (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(true, B.implies(true)));
	});

	it("combines two booleans using an implication", () => {
		expect(pipe(true, B.implies(true))).toEqual(true);
		expect(pipe(false, B.implies(false))).toEqual(true);
		expect(pipe(true, B.implies(false))).toEqual(false);
	});

	it("*", () => {
		expect(pipe(true, B.implies(false))).toEqual(false);
	});
});
