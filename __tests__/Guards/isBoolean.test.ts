import { expectType } from "ts-expect";

import { F, G, pipe } from "../..";

describe("isBoolean", () => {
	it("provides correct types", () => {
		const x = true;

		if (G.isBoolean(x)) {
			expectType<boolean>(x);
		}

		const y: unknown = true;

		if (G.isBoolean(y)) {
			expectType<boolean>(y);
		}
	});

	it("determines whether the provided value is boolean", () => {
		expect(G.isBoolean([1, 2, 3])).toEqual(false);
		expect(G.isBoolean("hello")).toEqual(false);
		expect(G.isBoolean({})).toEqual(false);
		expect(G.isBoolean(0)).toEqual(false);
		expect(G.isBoolean(false)).toEqual(true);
		expect(G.isBoolean(F.ignore)).toEqual(false);
		expect(G.isBoolean(Promise.resolve(1))).toEqual(false);
		expect(G.isBoolean(new Date())).toEqual(false);
		expect(G.isBoolean(new Error("oops"))).toEqual(false);
	});

	it("*", () => {
		expect(G.isBoolean(false)).toEqual(true);
	});
});

describe("isBoolean (pipe)", () => {
	it("*", () => {
		expect(pipe(true, G.isBoolean)).toEqual(true);
	});
});
