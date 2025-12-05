import { expectType } from "ts-expect";

import { B, pipe } from "../..";

describe("nor", () => {
	it("provides correct types", () => {
		expectType<boolean>(B.nor(true, true));
	});

	it("combines two booleans using NOR", () => {
		expect(B.nor(true, true)).toEqual(false);
		expect(B.nor(false, false)).toEqual(true);
		expect(B.nor(true, false)).toEqual(false);
	});

	it("*", () => {
		expect(B.nor(true, false)).toEqual(false);
	});
});

describe("nor (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(true, B.nor(true)));
	});

	it("combines two booleans using NOR", () => {
		expect(pipe(true, B.nor(true))).toEqual(false);
		expect(pipe(false, B.nor(false))).toEqual(true);
		expect(pipe(true, B.nor(false))).toEqual(false);
	});

	it("*", () => {
		expect(pipe(false, B.nor(false))).toEqual(true);
	});
});
