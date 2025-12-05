import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("intersection", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<string>>(
			A.intersection(["", "hello", "world"], [""]),
		);
	});

	it("*", () => {
		expect(A.intersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
	});
});

describe("intersection (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(
			pipe([1, 2, 3, 4, 5], A.intersection([3, 4, 5, 6])),
		);
	});

	it("*", () => {
		expect(pipe([5, 2, 3, 5, 6], A.intersection([5, 2, 3, 1, 5, 4]))).toEqual(
			// prettier-ignore
			[5, 2, 3],
		);
	});
});
