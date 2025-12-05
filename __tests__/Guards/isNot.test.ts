import { expectType } from "ts-expect";

import { F, G, pipe } from "../..";

const isNotString = G.isNot(G.isString);

describe("isNot", () => {
	it("provides correct types", () => {
		const x = Promise.resolve(0);

		if (isNotString(x)) {
			expectType<Promise<number>>(x);
		}

		const y = "" as unknown as string | number;

		if (isNotString(y)) {
			expectType<number>(y);
		}
	});

	it("determines whether the provided value is not string", () => {
		expect(isNotString([1, 2, 3])).toEqual(true);
		expect(isNotString("hello")).toEqual(false);
		expect(isNotString({})).toEqual(true);
		expect(isNotString(0)).toEqual(true);
		expect(isNotString(false)).toEqual(true);
		expect(isNotString(F.ignore)).toEqual(true);
		expect(isNotString(Promise.resolve(1))).toEqual(true);
		expect(isNotString(new Date())).toEqual(true);
		expect(isNotString(new Error("oops"))).toEqual(true);
	});

	it("*", () => {
		expect(
			// ⬇️ const isNotString = G.isNot(G.isString)
			isNotString(0),
		).toEqual(true);
	});
});

describe("isNot (pipe)", () => {
	it("*", () => {
		expect(pipe("ts-belt", G.isNot(G.isString))).toEqual(false);
	});
});
