import { expectType } from "ts-expect";

import { A } from "../..";

describe("makeWithIndex", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<string>>(
			A.makeWithIndex(4, (index) => `${index}`),
		);
		expectType<ReadonlyArray<number>>(A.makeWithIndex(4, (index) => index * 2));
	});

	it("returns a new array of size `n`", () => {
		const result = A.makeWithIndex(5, (index) => index * 2);
		expect(result).toEqual([0, 2, 4, 6, 8]);
	});

	it("*", () => {
		expect(A.makeWithIndex(5, (index) => index * 2)).toEqual([0, 2, 4, 6, 8]);
	});
});
