import { expectType } from "ts-expect";

import { B, pipe } from "../..";

describe("or", () => {
	it("provides correct types", () => {
		expectType<boolean>(B.or(true, true));
	});

	it("combines two booleans using OR", () => {
		expect(B.or(true, true)).toEqual(true);
		expect(B.or(false, false)).toEqual(false);
		expect(B.or(true, false)).toEqual(true);
	});

	it("*", () => {
		expect(B.or(true, false)).toEqual(true);
	});
});

describe("or (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(true, B.or(true)));
	});

	it("combines two booleans using OR", () => {
		expect(pipe(true, B.or(true))).toEqual(true);
		expect(pipe(false, B.or(false))).toEqual(false);
		expect(pipe(true, B.or(false))).toEqual(true);
	});

	it("*", () => {
		expect(pipe(false, B.or(false))).toEqual(false);
	});
});
