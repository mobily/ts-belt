import { expectType } from "ts-expect";

import { A, pipe } from "../..";

const xs = [5, 4, 3, 2, 1];

describe("zipWithIndex", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<readonly [number, number]>>(A.zipWithIndex(xs));
	});

	it("creates a new array of each value paired with its index in a tuple", () => {
		expect(A.zipWithIndex(xs)).toEqual([
			[5, 0],
			[4, 1],
			[3, 2],
			[2, 3],
			[1, 4],
		]);
	});

	it("*", () => {
		expect(A.zipWithIndex(["hello", "world"])).toEqual(
			// prettier-ignore
			[
				["hello", 0],
				["world", 1],
			],
		);
	});
});

describe("zipWithIndex (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<readonly [number, number]>>(
			pipe(xs, A.zipWithIndex),
		);
	});

	it("creates a new array of each value paired with its index in a tuple", () => {
		expect(pipe(xs, A.zipWithIndex)).toEqual([
			[5, 0],
			[4, 1],
			[3, 2],
			[2, 3],
			[1, 4],
		]);
	});
});
