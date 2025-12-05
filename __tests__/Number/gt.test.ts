import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("gt", () => {
	it("provides correct types", () => {
		expectType<boolean>(N.gt(2, 2));
	});

	it("reports if first argument is greater than second", () => {
		expect(N.gt(2, 4)).toEqual(false);
		expect(N.gt(4, 2)).toEqual(true);
		expect(N.gt(2, 2)).toEqual(false);

		expect(N.gt(2.0, 2.0)).toEqual(false);
		expect(N.gt(1.9, 2.0)).toEqual(false);
		expect(N.gt(2.1, 2.0)).toEqual(true);
	});

	it("*", () => {
		expect(N.gt(2, 4)).toEqual(false);
	});
});

describe("gt (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(3, N.gt(6)));
	});

	it("reports if first argument is greater than second", () => {
		expect(pipe(2, N.gt(4))).toEqual(false);
		expect(pipe(4, N.gt(2))).toEqual(true);
		expect(pipe(2, N.gt(2))).toEqual(false);

		expect(pipe(2.0, N.gt(2.0))).toEqual(false);
		expect(pipe(1.9, N.gt(2.0))).toEqual(false);
		expect(pipe(2.1, N.gt(2.0))).toEqual(true);
	});

	it("*", () => {
		expect(pipe(4, N.gt(2))).toEqual(true);
	});
});
