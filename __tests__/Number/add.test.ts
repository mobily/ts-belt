import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("add", () => {
	it("provides correct types", () => {
		expectType<number>(N.add(1, 2));
	});

	it("returns the sum of two numbers", () => {
		expect(N.add(10, 20)).toEqual(30);
	});

	it("*", () => {
		expect(N.add(10, 20)).toEqual(30);
	});
});

describe("add (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(1, N.add(2)));
	});

	it("returns the sum of two numbers", () => {
		expect(pipe(10, N.add(20))).toEqual(30);
	});

	it("*", () => {
		expect(pipe(5, N.add(10))).toEqual(15);
	});
});
