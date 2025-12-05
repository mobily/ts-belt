import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("lte", () => {
	it("provides correct types", () => {
		expectType<boolean>(N.lte(2, 2));
	});

	it("reports if first argument is lower or equal than second", () => {
		expect(N.lte(2, 4)).toEqual(true);
		expect(N.lte(4, 2)).toEqual(false);
		expect(N.lte(2, 2)).toEqual(true);

		expect(N.lte(2.0, 2.0)).toEqual(true);
		expect(N.lte(1.9, 2.0)).toEqual(true);
		expect(N.lte(2.1, 2.0)).toEqual(false);
	});

	it("*", () => {
		expect(N.lte(2, 4)).toEqual(true);
	});
});

describe("lte (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(3, N.lte(6)));
	});

	it("reports if first argument is lower or equal than second", () => {
		expect(pipe(2, N.lte(4))).toEqual(true);
		expect(pipe(4, N.lte(2))).toEqual(false);
		expect(pipe(2, N.lte(2))).toEqual(true);

		expect(pipe(2.0, N.lte(2.0))).toEqual(true);
		expect(pipe(1.9, N.lte(2.0))).toEqual(true);
		expect(pipe(2.1, N.lte(2.0))).toEqual(false);
	});

	it("*", () => {
		expect(pipe(4, N.lte(2))).toEqual(false);
	});
});
