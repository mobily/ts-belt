import { expectType } from "ts-expect";

import { G, pipe } from "../..";

describe("isNull", () => {
	it("provides correct types", () => {
		const x = null;

		if (G.isNull(x)) {
			expectType<null>(x);
		}

		const y: unknown = null;

		if (G.isNull(y)) {
			expectType<null>(y);
		}
	});

	it("determines whether the provided value is null", () => {
		expect(G.isNull(undefined)).toEqual(false);
		expect(G.isNull(null)).toEqual(true);
	});

	it("*", () => {
		expect(G.isNull(null)).toEqual(true);
	});
});

describe("isNull (pipe)", () => {
	it("*", () => {
		expect(pipe(null, G.isNull)).toEqual(true);
	});
});
