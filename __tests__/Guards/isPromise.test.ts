import { expectType } from "ts-expect";

import { F, G, pipe } from "../..";

describe("isPromise", () => {
	it("provides correct types", () => {
		const x = Promise.resolve(1);

		if (G.isPromise(x)) {
			expectType<Promise<number>>(x);
		}

		const y: unknown = Promise.resolve(1);

		if (G.isPromise(y)) {
			expectType<Promise<unknown>>(y);
		}
	});

	it("determines whether the provided value is Promise", () => {
		expect(G.isPromise([1, 2, 3])).toEqual(false);
		expect(G.isPromise("hello")).toEqual(false);
		expect(G.isPromise({})).toEqual(false);
		expect(G.isPromise(0)).toEqual(false);
		expect(G.isPromise(false)).toEqual(false);
		expect(G.isPromise(F.ignore)).toEqual(false);
		expect(G.isPromise(Promise.resolve(1))).toEqual(true);
		expect(G.isPromise(new Date())).toEqual(false);
		expect(G.isPromise(new Error("oops"))).toEqual(false);
	});

	it("*", () => {
		expect(G.isPromise(Promise.resolve(1))).toEqual(true);
	});
});

describe("isPromise (pipe)", () => {
	it("*", () => {
		expect(pipe(Promise.resolve(1), G.isPromise)).toEqual(true);
	});
});
