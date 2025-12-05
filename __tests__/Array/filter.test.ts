import { expectType } from "ts-expect";

import { A, F, G, S, pipe } from "../..";

describe("filter", () => {
	it("provides correct types", () => {
		A.filter([1, 2], (value) => {
			expectType<number>(value);
			return value % 2 === 0;
		});
		expectType<ReadonlyArray<string>>(A.filter([1, "hello"], G.isString));
		expectType<ReadonlyArray<string>>(A.filter(["hello"], S.startsWith("h")));
		expectType<ReadonlyArray<number>>(A.filter([1], F.equals(1)));
	});

	it("*", () => {
		expect(A.filter([1, 2, 3, 4], (value) => value % 2 === 0)).toEqual([2, 4]);
	});
});

describe("filter (pipe)", () => {
	it("provides correct types", () => {
		pipe(
			[1, 2],
			A.filter((value) => {
				expectType<number>(value);
				return value % 2 === 0;
			}),
		);
		pipe(["hello", "world"], A.filter(S.endsWith("o")));

		expectType<ReadonlyArray<string>>(pipe([1, "hello"], A.filter(G.isString)));
	});

	it("*", () => {
		expect(
			pipe(
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				A.filter((value) => value % 2 === 0),
			),
		).toEqual([2, 4, 6, 8]);
		expect(
			pipe(
				["hello", "wo", "rld"],
				A.filter((value) => value.length < 4),
			),
		).toEqual(["wo", "rld"]);
	});
});
