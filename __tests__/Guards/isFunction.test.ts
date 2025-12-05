import { expectType } from "ts-expect";

import { F, G, pipe } from "../..";

describe("isError", () => {
	it("provides correct types", () => {
		const x = F.ignore;

		if (G.isFunction(x)) {
			expectType<Function>(x);
		}

		const y: unknown = F.ignore;

		if (G.isFunction(y)) {
			expectType<Function>(y);
		}
	});

	it("determines whether the provided value is function", () => {
		expect(G.isFunction([1, 2, 3])).toEqual(false);
		expect(G.isFunction("hello")).toEqual(false);
		expect(G.isFunction({})).toEqual(false);
		expect(G.isFunction(0)).toEqual(false);
		expect(G.isFunction(false)).toEqual(false);
		expect(G.isFunction(F.ignore)).toEqual(true);
		expect(G.isFunction(Promise.resolve(1))).toEqual(false);
		expect(G.isFunction(new Date())).toEqual(false);
		expect(G.isArray(new Error("oops"))).toEqual(false);
	});

	it("*", () => {
		expect(G.isFunction(F.ignore)).toEqual(true);
	});
});

describe("isFunction (pipe)", () => {
	it("*", () => {
		expect(pipe(F.ignore, G.isFunction)).toEqual(true);
	});
});
