import { expectType } from "ts-expect";

import { A, pipe } from "../..";

const xs = [1, 2, 3];

describe("flatMap", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(
			A.flatMap(["hello", "world"], (value) => {
				return [value.length];
			}),
		);
	});

	it("returns correct value", () => {
		const result = A.flatMap(xs, (value) => [value * 2, value * 10]);
		expect(result).toEqual([2, 10, 4, 20, 6, 30]);
	});
});

describe("flatMap (pipe)", () => {
	it("returns correct value", () => {
		const result = pipe(
			xs,
			A.flatMap((value) => [value, value + 10]),
		);

		expect(result).toEqual([1, 11, 2, 12, 3, 13]);
	});
});
