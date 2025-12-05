import { expectType } from "ts-expect";

import { F, G, pipe } from "../..";

describe("isDate", () => {
	it("provides correct types", () => {
		const x = new Date();

		if (G.isDate(x)) {
			expectType<Date>(x);
		}

		const y: unknown = new Date();

		if (G.isDate(y)) {
			expectType<Date>(y);
		}
	});

	it("determines whether the provided value is Date", () => {
		expect(G.isDate([1, 2, 3])).toEqual(false);
		expect(G.isDate("hello")).toEqual(false);
		expect(G.isDate({})).toEqual(false);
		expect(G.isDate(0)).toEqual(false);
		expect(G.isDate(false)).toEqual(false);
		expect(G.isDate(F.ignore)).toEqual(false);
		expect(G.isDate(Promise.resolve(1))).toEqual(false);
		expect(G.isDate(new Date())).toEqual(true);
		expect(G.isArray(new Error("oops"))).toEqual(false);
	});

	it("*", () => {
		expect(G.isDate(new Date())).toEqual(true);
	});
});

describe("isDate (pipe)", () => {
	it("*", () => {
		expect(pipe(new Date(), G.isDate)).toEqual(true);
	});
});
