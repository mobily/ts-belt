import { expectType } from "ts-expect";

import { B, pipe } from "../..";

describe("and", () => {
	it("provides correct types", () => {
		expectType<boolean>(B.and(true, true));
	});

	it("combines two boolean using AND", () => {
		expect(B.and(true, true)).toEqual(true);
		expect(B.and(false, false)).toEqual(false);
		expect(B.and(true, false)).toEqual(false);
	});

	it("*", () => {
		expect(B.and(true, true)).toEqual(true);
	});
});

describe("and (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(true, B.and(true)));
	});

	it("combines two boolean using AND", () => {
		expect(pipe(true, B.and(true))).toEqual(true);
		expect(pipe(false, B.and(false))).toEqual(false);
		expect(pipe(true, B.and(false))).toEqual(false);
	});

	it("*", () => {
		expect(pipe(true, B.and(false))).toEqual(false);
	});
});
