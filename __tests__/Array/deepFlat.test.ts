import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("deepFlat", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(A.deepFlat([1, 2, 3, 4, 5]));
		expectType<ReadonlyArray<number>>(A.deepFlat([[1, 2], 3, [4, 5]]));
		expectType<ReadonlyArray<number>>(
			A.deepFlat([
				[1, 2],
				[[3], [4, 5]],
			]),
		);
		expectType<ReadonlyArray<number | string>>(
			A.deepFlat([
				[1, 2],
				[[3], ["hello", "world"]],
			]),
		);
	});

	it("flattens an array correctly", () => {
		const result = A.deepFlat([[1, 2], 3, [4, 5]]);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it("flattens nested arrays", () => {
		const result = A.deepFlat([
			[1, 2],
			[[3], [4, 5]],
		]);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it("flattens a single value", () => {
		const result = A.deepFlat([[1]]);
		expect(result).toEqual([1]);
	});
});

describe("deepFlat (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(pipe([1, 2, 3, 4, 5], A.deepFlat));
		expectType<ReadonlyArray<number>>(pipe([[1, 2], 3, [4, 5]], A.deepFlat));
		expectType<ReadonlyArray<number>>(
			pipe(
				[
					[1, 2],
					[[3], [4, 5]],
				],
				A.deepFlat,
			),
		);
		expectType<ReadonlyArray<number | string>>(
			pipe(
				[
					[1, 2],
					[[3], ["hello", "world"]],
				],
				A.deepFlat,
			),
		);
	});

	it("flattens an array correctly", () => {
		const result = pipe([[1, 2], 3, [4, 5]], A.deepFlat);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it("flattens nested arrays", () => {
		const result = pipe(
			[
				[1, 2],
				[[3], [4, 5]],
			],
			A.deepFlat,
		);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it("flattens a single value", () => {
		const result = pipe([[1]], A.deepFlat);
		expect(result).toEqual([1]);
	});
});
