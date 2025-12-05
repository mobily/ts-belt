import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("gte", () => {
	it("provides correct types", () => {
		expectType<boolean>(N.gte(2, 2));
	});

	it("reports if first argument is greater or equal than second", () => {
		expect(N.gte(2, 4)).toEqual(false);
		expect(N.gte(4, 2)).toEqual(true);
		expect(N.gte(2, 2)).toEqual(true);

		expect(N.gte(2.0, 2.0)).toEqual(true);
		expect(N.gte(1.9, 2.0)).toEqual(false);
		expect(N.gte(2.1, 2.0)).toEqual(true);
	});

	it("*", () => {
		expect(N.gte(2, 4)).toEqual(false);
	});
});

describe("gte (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(3, N.gte(6)));
	});

	it("reports if first argument is greater or equal than second", () => {
		expect(pipe(2, N.gte(4))).toEqual(false);
		expect(pipe(4, N.gte(2))).toEqual(true);
		expect(pipe(2, N.gte(2))).toEqual(true);

		expect(pipe(2.0, N.gte(2.0))).toEqual(true);
		expect(pipe(1.9, N.gte(2.0))).toEqual(false);
		expect(pipe(2.1, N.gte(2.0))).toEqual(true);
	});

	it("*", () => {
		expect(pipe(4, N.gte(2))).toEqual(true);
	});
});
