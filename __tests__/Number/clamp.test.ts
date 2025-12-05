import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("clamp", () => {
	it("provides correct types", () => {
		expectType<number>(N.clamp(2, 2, 5));
	});

	it("clamps value", () => {
		expect(N.clamp(2, 4, 5)).toEqual(4);
		expect(N.clamp(8, 2, 5)).toEqual(5);
		expect(N.clamp(6, 2, 10)).toEqual(6);

		expect(N.clamp(2.0, 2.1, 5)).toEqual(2.1);
		expect(N.clamp(8.1, 2, 8.05)).toEqual(8.05);
		expect(N.clamp(6.01, 0.2, 10.8)).toEqual(6.01);
	});

	it("*", () => {
		expect(N.clamp(2, 4, 6)).toEqual(4);
	});
});

describe("clamp (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(3, N.clamp(6, 10)));
	});

	it("clamps value", () => {
		expect(pipe(2, N.clamp(3, 6))).toEqual(3);
		expect(pipe(8, N.clamp(2, 4))).toEqual(4);
		expect(pipe(6, N.clamp(1, 10))).toEqual(6);

		expect(pipe(2.0, N.clamp(2.1, 5))).toEqual(2.1);
		expect(pipe(6.1, N.clamp(1.1, 5.5))).toEqual(5.5);
		expect(pipe(0.11, N.clamp(0.1, 5))).toEqual(0.11);
	});

	it("*", () => {
		expect(pipe(10, N.clamp(2, 5))).toEqual(5);
	});
});
