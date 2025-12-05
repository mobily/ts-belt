import { expectType } from "ts-expect";

import { A, O, pipe } from "../..";

describe("filterMap", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<string>>(
			A.filterMap(["", "hello", "world"], (value) => {
				return value.length ? O.Some(value) : O.None;
			}),
		);
	});

	it("*", () => {
		expect(
			A.filterMap(["", "hello", "world", ""], (value) => {
				return value.length > 0 ? O.Some(value.length) : O.None;
			}),
		).toEqual([5, 5]);
	});
});

describe("filterMap (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(
			pipe(
				[1, 2, 3, 4, 5],
				A.filterMap((value) => {
					return value % 2 === 0 ? O.Some(value * 2) : O.None;
				}),
			),
		);
	});

	it("*", () => {
		expect(
			pipe(
				[1, 2, 3, 4, 5],
				A.filterMap((value) => {
					return value % 2 === 0 ? O.Some(value * 2) : O.None;
				}),
			),
		).toEqual([4, 8]);
	});
});
