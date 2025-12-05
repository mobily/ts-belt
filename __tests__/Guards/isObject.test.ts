import { expectType } from "ts-expect";
import { F, G, pipe } from "../..";

describe("isObject", () => {
	it("provides correct types", () => {
		const x = {} as Record<string, string>;

		if (G.isObject(x)) {
			expectType<Record<string, string>>(x);
		}

		const y: unknown = {};

		if (G.isObject(y)) {
			expectType<Record<string, unknown>>(y);
		}
	});

	it("determines whether the provided value is object", () => {
		expect(G.isObject({})).toEqual(true);
		expect(G.isObject([1, 2, 3])).toEqual(false);
		expect(G.isObject("hello")).toEqual(false);
		expect(G.isObject(0)).toEqual(false);
		expect(G.isObject(false)).toEqual(false);
		expect(G.isObject(F.ignore)).toEqual(false);
		expect(G.isObject(Promise.resolve(1))).toEqual(true);
		expect(G.isObject(new Date())).toEqual(true);
		expect(G.isObject(new Error("oops"))).toEqual(true);
	});

	it("*", () => {
		expect(G.isObject({})).toEqual(true);
	});
});

describe("isObject (pipe)", () => {
	it("*", () => {
		expect(pipe({}, G.isObject)).toEqual(true);
	});
});
