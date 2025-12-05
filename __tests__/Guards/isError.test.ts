import { expectType } from "ts-expect";

import { F, G, pipe } from "../..";

describe("isError", () => {
	it("provides correct types", () => {
		const x = new Error("oops!");

		if (G.isError(x)) {
			expectType<Error>(x);
		}

		const y: unknown = new Error("oops!");

		if (G.isError(y)) {
			expectType<Error>(y);
		}
	});

	it("determines whether the provided value is Error", () => {
		expect(G.isError(new Error("oops"))).toEqual(true);
		expect(G.isError([1, 2, 3])).toEqual(false);
		expect(G.isError("hello")).toEqual(false);
		expect(G.isError({})).toEqual(false);
		expect(G.isError(0)).toEqual(false);
		expect(G.isError(true)).toEqual(false);
		expect(G.isError(F.ignore)).toEqual(false);
		expect(G.isError(Promise.resolve(1))).toEqual(false);
		expect(G.isError(new Date())).toEqual(false);
	});

	it("*", () => {
		expect(G.isError(new Error("oops!"))).toEqual(true);
	});
});

describe("isError (pipe)", () => {
	it("*", () => {
		expect(pipe(new Error("oops!"), G.isError)).toEqual(true);
	});
});
