import { expectType } from "ts-expect";

import { F, G, pipe } from "../..";

describe("isArray", () => {
	it("provides correct types", () => {
		const xs = [1, 2, 3];

		if (G.isArray(xs)) {
			expectType<ReadonlyArray<number>>(xs);
		}

		const ys: unknown = [1, 2, 3];

		if (G.isArray(ys)) {
			expectType<ReadonlyArray<unknown>>(ys);
		}
	});

	it("determines whether the provided value is array", () => {
		expect(G.isArray([1, 2, 3])).toEqual(true);
		expect(G.isArray("hello")).toEqual(false);
		expect(G.isArray({})).toEqual(false);
		expect(G.isArray(0)).toEqual(false);
		expect(G.isArray(false)).toEqual(false);
		expect(G.isArray(F.ignore)).toEqual(false);
		expect(G.isArray(Promise.resolve(1))).toEqual(false);
		expect(G.isArray(new Date())).toEqual(false);
		expect(G.isArray(new Error("oops"))).toEqual(false);
	});

	it("*", () => {
		expect(G.isArray([1, 2, 3])).toEqual(true);
	});
});

describe("isArray (pipe)", () => {
	it("*", () => {
		expect(pipe(["hello", "world"], G.isArray)).toEqual(true);
	});
});
