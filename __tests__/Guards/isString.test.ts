import { expectType } from "ts-expect";

import { F, G, pipe } from "../..";

describe("isString", () => {
	it("provides correct types", () => {
		const x = "";

		if (G.isString(x)) {
			expectType<string>(x);
		}

		const y: unknown = "";

		if (G.isString(y)) {
			expectType<string>(y);
		}
	});

	it("determines whether the provided value is string", () => {
		expect(G.isString([1, 2, 3])).toEqual(false);
		expect(G.isString("hello")).toEqual(true);
		expect(G.isString({})).toEqual(false);
		expect(G.isString(0)).toEqual(false);
		expect(G.isString(false)).toEqual(false);
		expect(G.isString(F.ignore)).toEqual(false);
		expect(G.isString(Promise.resolve(1))).toEqual(false);
		expect(G.isString(new Date())).toEqual(false);
		expect(G.isString(new Error("oops"))).toEqual(false);
	});

	it("*", () => {
		expect(G.isString("ts")).toEqual(true);
	});
});

describe("isString (pipe)", () => {
	it("*", () => {
		expect(pipe("belt", G.isString)).toEqual(true);
	});
});
