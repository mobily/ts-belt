import { expectType } from "ts-expect";

import { A, pipe } from "../..";

type Obj = {
	readonly a?: number;
	readonly b?: number;
	readonly c?: number;
};

describe("difference", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<string>>(
			A.difference(["", "hello", "world"], [""]),
		);
	});

	it("returns a correct result", () => {
		expect(
			A.difference<Obj>([{ a: 1 }, { b: 2 }], [{ a: 1 }, { c: 3 }]),
		).toEqual([{ b: 2 }]);
	});

	it("*", () => {
		expect(A.difference([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([1, 2]);
	});
});

describe("difference (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(
			pipe([5, 2, 3, 5, 6], A.difference([5, 2, 3, 1, 5, 4])),
		);
	});

	it("*", () => {
		expect(pipe([5, 2, 3, 5, 6], A.difference([5, 2, 3, 1, 5, 4]))).toEqual([
			6,
		]);
	});
});
