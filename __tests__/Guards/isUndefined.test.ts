import { expectType } from "ts-expect";

import { G, pipe } from "../..";

describe("isUndefined", () => {
	it("provides correct types", () => {
		const x = undefined;

		if (G.isUndefined(x)) {
			expectType<undefined>(x);
		}

		const y: unknown = undefined;

		if (G.isUndefined(y)) {
			expectType<undefined>(y);
		}
	});

	it("determines whether the provided value is undefined", () => {
		expect(G.isUndefined(undefined)).toEqual(true);
		expect(G.isUndefined(null)).toEqual(false);
	});

	it("*", () => {
		expect(G.isUndefined(undefined)).toEqual(true);
	});
});

describe("isUndefined (pipe)", () => {
	it("*", () => {
		expect(pipe(undefined, G.isUndefined)).toEqual(true);
	});
});
