import { expectType } from "ts-expect";

import { F, G, pipe } from "../..";

describe("isNumber", () => {
	it("provides correct types", () => {
		const x = 0;

		if (G.isNumber(x)) {
			expectType<number>(x);
		}

		const y: unknown = 0;

		if (G.isNumber(y)) {
			expectType<number>(y);
		}
	});

	it("determines whether the provided value is number", () => {
		expect(G.isNumber([1, 2, 3])).toEqual(false);
		expect(G.isNumber("hello")).toEqual(false);
		expect(G.isNumber({})).toEqual(false);
		expect(G.isNumber(0)).toEqual(true);
		expect(G.isNumber(false)).toEqual(false);
		expect(G.isNumber(F.ignore)).toEqual(false);
		expect(G.isNumber(Promise.resolve(1))).toEqual(false);
		expect(G.isNumber(new Date())).toEqual(false);
		expect(G.isNumber(new Error("oops"))).toEqual(false);
	});

	it("*", () => {
		expect(G.isNumber(3)).toEqual(true);
	});
});

describe("isNumber (pipe)", () => {
	it("*", () => {
		expect(pipe(3, G.isNumber)).toEqual(true);
	});
});
