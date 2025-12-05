import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("lt", () => {
	it("provides correct types", () => {
		expectType<boolean>(N.lt(2, 2));
	});

	it("reports if first argument is lower than second", () => {
		expect(N.lt(2, 4)).toEqual(true);
		expect(N.lt(4, 2)).toEqual(false);
		expect(N.lt(2, 2)).toEqual(false);

		expect(N.lt(2.0, 2.0)).toEqual(false);
		expect(N.lt(1.9, 2.0)).toEqual(true);
		expect(N.lt(2.1, 2.0)).toEqual(false);
	});

	it("*", () => {
		expect(N.lt(2, 4)).toEqual(true);
	});
});

describe("lt (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(3, N.lt(6)));
	});

	it("reports if first argument is lower than second", () => {
		expect(pipe(2, N.lt(4))).toEqual(true);
		expect(pipe(4, N.lt(2))).toEqual(false);
		expect(pipe(2, N.lt(2))).toEqual(false);

		expect(pipe(2.0, N.lt(2.0))).toEqual(false);
		expect(pipe(1.9, N.lt(2.0))).toEqual(true);
		expect(pipe(2.1, N.lt(2.0))).toEqual(false);
	});

	it("*", () => {
		expect(pipe(4, N.lt(2))).toEqual(false);
	});
});
