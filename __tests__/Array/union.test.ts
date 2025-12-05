import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("difference", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<string>>(A.union(["", "hello", "world"], [""]));
	});

	it("*", () => {
		expect(A.union([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	});
});

describe("union (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(
			pipe([5, 2, 3, 5, 6], A.union([5, 2, 3, 1, 5, 4])),
		);
	});

	it("*", () => {
		expect(pipe([5, 2, 3, 5, 6], A.union([5, 2, 3, 1, 5, 4]))).toEqual(
			// prettier-ignore
			[5, 2, 3, 6, 1, 4],
		);
	});
});
