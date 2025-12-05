import { expectType } from "ts-expect";

import { G, pipe } from "../..";

describe("isNullable", () => {
	it("provides correct types", () => {
		const x = "" as unknown as null | string;

		if (G.isNullable(x)) {
			expectType<null>(x);
		}
	});

	it("determines whether the provided value is nullable", () => {
		expect(G.isNullable(undefined)).toEqual(true);
		expect(G.isNullable(null)).toEqual(true);
	});

	it("*", () => {
		expect(G.isNullable(null)).toEqual(true);
	});
});

describe("isNullable (pipe)", () => {
	it("*", () => {
		expect(pipe(undefined, G.isNullable)).toEqual(true);
	});
});
