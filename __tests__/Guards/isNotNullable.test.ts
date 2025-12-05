import { expectType } from "ts-expect";

import { G, pipe } from "../..";

describe("isNotNullable", () => {
	it("provides correct types", () => {
		const x = "" as unknown as null | string;

		if (G.isNotNullable(x)) {
			expectType<string>(x);
		}
	});

	it("determines whether the provided value is not nullable", () => {
		expect(G.isNotNullable(undefined)).toEqual(false);
		expect(G.isNotNullable(null)).toEqual(false);
		expect(G.isNotNullable("ts-belt")).toEqual(true);
		expect(G.isNotNullable([])).toEqual(true);
	});

	it("*", () => {
		expect(G.isNotNullable("ts-belt")).toEqual(true);
		expect(G.isNotNullable(null)).toEqual(false);
	});
});

describe("isNotNullable (pipe)", () => {
	it("*", () => {
		expect(pipe(0, G.isNotNullable)).toEqual(true);
		expect(pipe(undefined, G.isNotNullable)).toEqual(false);
	});
});
