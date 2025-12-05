import { expectType } from "ts-expect";

import { A, pipe } from "../..";

const xs = [
	A.toTuple([1, 2]),
	A.toTuple([3, 4]),
	A.toTuple([5, 6]),
	A.toTuple([7, 8]),
];

describe("unzip", () => {
	it("provides correct types", () => {
		expectType<readonly [ReadonlyArray<number>, ReadonlyArray<number>]>(
			A.unzip(xs),
		);
	});

	it("returns a pair of arrays", () => {
		const result = A.unzip(xs);
		expect(result).toEqual([
			[1, 3, 5, 7],
			[2, 4, 6, 8],
		]);
	});
});

describe("unzip (pipe)", () => {
	it("provides correct types", () => {
		expectType<readonly [ReadonlyArray<number>, ReadonlyArray<number>]>(
			pipe(xs, A.unzip),
		);
	});

	it("returns a pair of arrays", () => {
		const result = pipe(xs, A.unzip);
		expect(result).toEqual([
			[1, 3, 5, 7],
			[2, 4, 6, 8],
		]);
	});
});
