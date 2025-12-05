import { expectType } from "ts-expect";

import { B, pipe } from "../..";

describe("inverse", () => {
	it("provides correct types", () => {
		expectType<boolean>(B.inverse(true));
	});

	it("negates the given boolean", () => {
		expect(B.inverse(true)).toEqual(false);
		expect(B.inverse(false)).toEqual(true);
	});

	it("*", () => {
		expect(B.inverse(false)).toEqual(true);
	});
});

describe("inverse (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(true, B.inverse));
	});

	it("negates the given boolean", () => {
		expect(pipe(true, B.inverse)).toEqual(false);
		expect(pipe(false, B.inverse)).toEqual(true);
	});

	it("*", () => {
		expect(pipe(true, B.inverse)).toEqual(false);
	});
});
