import { expectType } from "ts-expect";

import { A, G, S, pipe } from "../..";

describe("partition", () => {
	it("provides correct types", () => {
		A.partition([1, 2, 3, 4], (value) => {
			expectType<number>(value);
			return value > 3;
		});
		expectType<readonly [ReadonlyArray<string>, ReadonlyArray<number>]>(
			A.partition([1, "hello", 2, "world"], G.isString),
		);

		expectType<
			readonly [ReadonlyArray<number>, ReadonlyArray<string | { prop: number }>]
		>(A.partition([1, "hello", 2, "world", { prop: 1 }], G.isNumber));

		expectType<readonly [ReadonlyArray<string>, ReadonlyArray<string>]>(
			A.partition(["hello", "world"], S.startsWith("h")),
		);
	});

	it("*", () => {
		expect(A.partition([1, 2, 3, 4], (value) => value > 2)).toEqual(
			// prettier-ignore
			[
				[3, 4],
				[1, 2],
			],
		);
	});
});

describe("partition (pipe)", () => {
	it("provides correct types", () => {
		pipe(
			[1, 2, 3, 4],
			A.partition((value) => {
				expectType<number>(value);
				return value > 2;
			}),
		);
		expectType<readonly [ReadonlyArray<string>, ReadonlyArray<number>]>(
			pipe([1, "hello"], A.partition(G.isString)),
		);
	});

	it("*", () => {
		expect(pipe([1, "hello", 2, "world"], A.partition(G.isString))).toEqual(
			// prettier-ignore
			[
				["hello", "world"],
				[1, 2],
			],
		);
	});
});
